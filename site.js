(function () {
  const publications = window.PUBLICATIONS || [];
  const gallery = document.getElementById("publication-gallery");
  const list = document.getElementById("publications-list");
  const emailHolder = document.getElementById("email-link");

  if (emailHolder) {
    const encoded = "a2FpbGlubGlAc2p0dS5lZHUuY24=";
    const email = atob(encoded);
    const link = document.createElement("a");
    link.href = `mailto:${email}`;
    link.textContent = "Email";
    emailHolder.appendChild(link);
  }

  if (!list) {
    return;
  }

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const ratioToNumber = (ratio) => {
    if (!ratio) {
      return 16 / 9;
    }

    const parts = String(ratio).split("/").map((part) => Number.parseFloat(part.trim()));
    if (parts.length === 2 && parts[0] > 0 && parts[1] > 0) {
      return parts[0] / parts[1];
    }

    const numeric = Number.parseFloat(ratio);
    return Number.isFinite(numeric) && numeric > 0 ? numeric : 16 / 9;
  };

  const htmlToText = (html) => {
    const template = document.createElement("template");
    template.innerHTML = html || "";
    return (template.content.textContent || "").replace(/\s+/g, " ").trim();
  };

  const getPublicationTone = (publication) => {
    if (publication.tone) {
      return publication.tone;
    }

    const text = htmlToText([
      publication.authorsHtml,
      publication.noteHtml,
      publication.venueHtml
    ].filter(Boolean).join(" "));
    const roles = publication.roles || [];

    if (roles.includes("highlight") || /\bHighlight\b/i.test(text)) {
      return "highlight";
    }

    if (roles.includes("oral") || /Oral Presentation/i.test(text)) {
      return "oral";
    }

    if (roles.includes("corresponding") || /Kailin Li\s*[#†]/.test(text)) {
      return "corresponding";
    }

    if (roles.includes("first") || /^Kailin Li\b/.test(text) || /Kailin Li\s*\*/.test(text)) {
      return "first";
    }

    return "other";
  };

  const mediaLayer = (source, className, type) => {
    if (!source) {
      return "";
    }

    if (type === "video") {
      return `
        <video class="media-layer ${className}" muted autoplay loop playsinline preload="metadata" aria-hidden="true">
          <source src="${source}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    }

    return `<img class="media-layer ${className}" src="${source}" alt="" loading="lazy" decoding="async">`;
  };

  const renderMedia = (media) => {
    if (!media || (!media.image && !media.video && !media.hoverImage)) {
      return "";
    }

    const sourceRatio = ratioToNumber(media.ratio || "16 / 9");
    const ratio = media.listRatio || `${clamp(sourceRatio, 1.35, 2.05)} / 1`;
    const fit = media.listFit || media.fit || "contain";
    const base = mediaLayer(media.image, "media-base", "image");
    const hover = media.video
      ? mediaLayer(media.video, "media-hover", "video")
      : mediaLayer(media.hoverImage, "media-hover", "image");
    const frameClasses = ["paper-media-frame"];

    if (media.video || media.hoverImage) {
      frameClasses.push("has-hover-media");
    }

    if (media.video) {
      frameClasses.push("has-video-media");
    }

    return `
      <div class="${frameClasses.join(" ")}" style="--media-ratio: ${ratio}; --media-fit: ${fit}">
        ${base}
        ${hover}
      </div>
    `;
  };

  const galleryItems = publications.map((publication, index) => {
    const media = publication.media || {};
    const src = media.galleryImage || media.image || media.hoverImage;

    if (!src) {
      return null;
    }

    return {
      id: publication.id,
      href: `#publication-${publication.id}`,
      src,
      index,
      title: htmlToText(publication.titleHtml),
      tone: getPublicationTone(publication),
      ratio: ratioToNumber(media.galleryRatio || media.ratio || media.listRatio)
    };
  }).filter(Boolean);

  const readImageRatio = (item) => new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      const naturalRatio = image.naturalWidth && image.naturalHeight
        ? image.naturalWidth / image.naturalHeight
        : item.ratio;
      resolve({ ...item, ratio: naturalRatio || item.ratio || 16 / 9 });
    };

    image.onerror = () => {
      resolve({ ...item, ratio: item.ratio || 16 / 9 });
    };

    image.src = item.src;
  });

  const splitGalleryRows = (items, availableWidth, gap, options) => {
    const count = items.length;
    if (count === 0) {
      return [];
    }

    const minItems = Math.min(options.minItems, count);
    const maxItems = Math.min(options.maxItems, count);
    const dp = Array.from({ length: count + 1 }, () => null);
    dp[0] = { cost: 0, rows: [] };

    for (let start = 0; start < count; start += 1) {
      if (!dp[start]) {
        continue;
      }

      for (let rowCount = minItems; rowCount <= maxItems; rowCount += 1) {
        const end = start + rowCount;
        if (end > count) {
          break;
        }

        const remaining = count - end;
        if (remaining > 0 && remaining < minItems) {
          continue;
        }

        const rowItems = items.slice(start, end);
        const ratioSum = rowItems.reduce((sum, item) => sum + item.ratio, 0) || rowItems.length;
        const rowWidth = availableWidth - gap * (rowItems.length - 1);
        const rowHeight = Math.max(1, rowWidth / ratioSum);
        const targetDelta = rowHeight - options.targetHeight;
        let cost = targetDelta * targetDelta;

        if (rowHeight < options.minHeight) {
          cost += Math.pow(options.minHeight - rowHeight, 2) * 4;
        }

        if (rowHeight > options.maxHeight) {
          cost += Math.pow(rowHeight - options.maxHeight, 2) * 4;
        }

        if (rowItems.length === 1 && count > 1) {
          cost += 20000;
        }

        const nextCost = dp[start].cost + cost;
        if (!dp[end] || nextCost < dp[end].cost) {
          dp[end] = {
            cost: nextCost,
            rows: dp[start].rows.concat([rowItems])
          };
        }
      }
    }

    if (dp[count]) {
      return dp[count].rows;
    }

    const fallbackRows = [];
    for (let index = 0; index < count; index += maxItems) {
      fallbackRows.push(items.slice(index, index + maxItems));
    }
    return fallbackRows;
  };

  const renderGallery = (items) => {
    if (!gallery || !items.length) {
      return;
    }

    const galleryWidth = Math.max(1, gallery.clientWidth);
    const style = window.getComputedStyle(gallery);
    const gap = Number.parseFloat(style.getPropertyValue("--gallery-gap")) || 4;
    const isCompact = galleryWidth < 640;
    const options = {
      minItems: isCompact ? 2 : 3,
      maxItems: isCompact ? 3 : 5,
      targetHeight: clamp(galleryWidth / (isCompact ? 3.1 : 5.7), isCompact ? 118 : 128, isCompact ? 168 : 188),
      minHeight: isCompact ? 96 : 108,
      maxHeight: isCompact ? 184 : 210
    };
    const rows = splitGalleryRows(items, galleryWidth, gap, options);

    gallery.innerHTML = "";

    rows.forEach((row) => {
      const rowElement = document.createElement("div");
      rowElement.className = "gallery-row";

      const ratioSum = row.reduce((sum, item) => sum + item.ratio, 0) || row.length;
      const availableRowWidth = galleryWidth - gap * (row.length - 1);
      const rowHeight = Math.max(1, availableRowWidth / ratioSum);
      rowElement.style.height = `${rowHeight}px`;

      let usedWidth = 0;
      row.forEach((item, index) => {
        const width = index === row.length - 1
          ? Math.max(1, availableRowWidth - usedWidth)
          : item.ratio * rowHeight;
        usedWidth += width;

        const link = document.createElement("a");
        link.className = `gallery-tile tone-${item.tone}`;
        link.href = item.href;
        link.style.width = `${width}px`;
        link.setAttribute("aria-label", item.title);

        const image = document.createElement("img");
        image.src = item.src;
        image.alt = item.title;
        image.loading = "lazy";
        image.decoding = "async";

        const label = document.createElement("span");
        label.className = "gallery-title";
        label.textContent = item.title;

        link.append(image, label);
        rowElement.appendChild(link);
      });

      gallery.appendChild(rowElement);
    });
  };

  if (gallery && galleryItems.length) {
    Promise.all(galleryItems.map(readImageRatio)).then((items) => {
      renderGallery(items);

      if ("ResizeObserver" in window) {
        const observer = new ResizeObserver(() => renderGallery(items));
        observer.observe(gallery);
      } else {
        window.addEventListener("resize", () => renderGallery(items));
      }
    });
  }

  publications.forEach((publication, index) => {
    const article = document.createElement("article");
    article.className = "publication-card";
    article.id = `publication-${publication.id}`;
    article.dataset.publication = publication.id;
    article.classList.add(`tone-${getPublicationTone(publication)}`);

    if (index < 2) {
      article.classList.add("is-featured");
    }

    if ((publication.venueHtml || "").includes("Oral Presentation")) {
      article.classList.add("has-award");
    }

    const rows = [
      publication.authorsHtml && `<div class="paper-authors">${publication.authorsHtml}</div>`,
      publication.noteHtml && `<div class="paper-note">${publication.noteHtml}</div>`,
      publication.venueHtml && `<div class="paper-venue">${publication.venueHtml}</div>`,
      publication.linksHtml && `<div class="paper-links">${publication.linksHtml}</div>`
    ].filter(Boolean).join("");

    article.innerHTML = `
      <div class="paper-media">
        ${renderMedia(publication.media)}
      </div>
      <div class="paper-content">
        <h3 class="paper-title">
          <a href="${publication.titleHref || "#"}">${publication.titleHtml}</a>
        </h3>
        <div class="paper-meta">
          ${rows}
        </div>
        <p class="paper-abstract">${publication.abstractHtml || ""}</p>
      </div>
    `;

    list.appendChild(article);
  });
})();
