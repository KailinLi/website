window.PUBLICATIONS = [
  {
    id: "gallant",
    media: {
      image: "images/gallant_teaser.png",
      video: "images/gallant_video.mp4",
      ratio: "16 / 9"
    },
    titleHref: "#",
    titleHtml: `<span class="small-caps">Gallant</span>: Voxel Grid-based Humanoid Locomotion and Local-navigation across 3D Constrained Terrains`,
    authorsHtml: `<a href="https://www.qingweiben.com/">Qingwei Ben</a>*,
      <a href="https://scholar.google.com/citations?user=OLLsgKIAAAAJ&hl=en">Botian Xu</a>*,
      <strong>Kailin Li</strong>*,
      <a href="https://trap-1.github.io/">Feiyu Jia</a>,
      <a href="https://zwt006.github.io/">Wentao Zhang</a>,
      <a href="https://scholar.google.com/citations?user=YmnK82wAAAAJ&hl=zh-CN">Jingping Wang</a>,
      <a href="https://wangjingbo1219.github.io/">Jingbo Wang</a>,
      <a href="http://dahua.site/">Dahua Lin</a>,
      <a href="https://oceanpang.github.io/">Jiangmiao Pang</a>`,
    noteHtml: `(*=equal contribution)`,
    venueHtml: `<strong><em>CVPR</em>, 2026</strong> <strong class="highlight-badge">(Highlight)</strong>`,
    linksHtml: `<a href="https://gallantloco.github.io">project page</a>
      /
      <a href="https://arxiv.org/abs/2511.14625">arxiv</a>`,
    abstractHtml: `<span class="small-caps">Gallant</span> is a voxel-grid–based perception-learning
      framework that uses LiDAR voxelization and a
      z-grouped 2D CNN to learn end-to-end humanoid locomotion policies in complex 3D constrained
      environments. By providing global 3D coverage beyond elevation maps and depth images, and training
      in a high-fidelity LiDAR simulator, a single <span class="small-caps">Gallant</span>
      policy robustly handles stairs, narrow
      passages, lateral clutter, overhead constraints, and multi-level structures with near-perfect
      success.`
  },
  {
    id: "maniptrans",
    media: {
      image: "images/maniptrans_teaser.png",
      video: "images/maniptrans_cut.mp4",
      ratio: "2 / 1"
    },
    titleHref: "#",
    titleHtml: `<span class="small-caps">ManipTrans</span>: Efficient Dexterous Bimanual Manipulation Transfer via Residual Learning`,
    authorsHtml: `<strong>Kailin Li</strong>,
      <a href="https://xiaoyao-li.github.io/">Puhao Li</a>,
      <a href="https://tengyu.ai/">Tengyu Liu</a>,
      <a href="https://yuyangli.com/">Yuyang Li</a>,
      <a href="https://siyuanhuang.com/">Siyuan Huang</a>`,
    venueHtml: `<strong><em>CVPR</em>, 2025</strong>`,
    linksHtml: `<a href="https://maniptrans.github.io/">project page</a>
      /
      <a href="https://arxiv.org/abs/2503.21860">arxiv</a>
      /
      <a href="https://github.com/ManipTrans/ManipTrans">Github</a>
      /
      <a href="https://mp.weixin.qq.com/s/U1mqo5TTQ19qc_C8VzBC9A">Overview(中文)</a>
      /
      <a href="https://event.baai.ac.cn/activities/930">Talk(中文)</a>`,
    abstractHtml: `Our objective is to develop a policy that enables dexterous robotic hands to replicate human hands
      accurately–object interaction trajectories in simulation while satisfying the tasks' semantic
      manipulation constraints. The key innovation of <span class="small-caps">ManipTrans</span> is to frame this transfer as a
      two-stage
      process: first, a pre-training trajectory imitation stage focusing solely on hand motion, and
      second, a specific action fine-tuning stage that addresses interaction constraints. By leveraging
      <span class="small-caps">ManipTrans</span>, we transfer multiple hand–object
      datasets to robotic hands, creating <span class="small-caps">DexManipNet</span>—a
      large-scale dataset featuring previously unexplored tasks such as pen capping and bottle unscrewing,
      that facilitate further policy training for dexterous hands and enabling real-world deployments.`
  },
  {
    id: "semgrasp",
    media: {
      image: "images/semgrasp_teaser.png",
      ratio: "4 / 3"
    },
    titleHref: "#",
    titleHtml: `<span class="small-caps">SemGrasp</span>: Semantic Grasp Generation via Language Aligned Discretization`,
    authorsHtml: `<strong>Kailin Li</strong>,
      <a href="https://scholar.google.com/citations?hl=en&user=GStTsxAAAAAJ">Jingbo Wang</a>,
      <a href="https://lixiny.github.io">Lixin Yang</a>,
      <a href="https://www.mvig.org">Cewu Lu</a>,
      <a href="http://daibo.info">Bo Dai</a>`,
    venueHtml: `<strong><em>ECCV</em>, 2024</strong> <strong class="award">(Oral Presentation)</strong>`,
    linksHtml: `<a href="https://kailinli.github.io/SemGrasp/">project page</a>
      /
      <a href="https://arxiv.org/abs/2404.03590">arxiv</a>
      /
      <a href="https://huggingface.co/datasets/LiKailin/CapGrasp">dataset</a>`,
    abstractHtml: `Generating human grasps involves both object geometry and semantic cues. This paper introduces
      <span class="small-caps">SemGrasp</span>, a method that infuses semantic information
      into grasp generation, aligning with language
      instructions. Leveraging a unified semantic framework and a Multimodal Large Language Model (MLLM),
      <span class="small-caps">SemGrasp</span> is supported by <span
      class="small-caps">CapGrasp</span>, a dataset
      featuring detailed captions and diverse grasps.
      Experiments demonstrate <span class="small-caps">SemGrasp</span>'s ability to produce
      grasps consistent with linguistic intentions,
      surpassing shape-only approaches.`
  },
  {
    id: "favor",
    media: {
      image: "images/favor_start.png",
      video: "images/FAVOR_dataset_cut.mp4",
      ratio: "4 / 3"
    },
    titleHref: "#",
    titleHtml: `<span class="small-caps">Favor</span>: Full-Body AR-Driven Virtual Object Rearrangement Guided by Instruction Text`,
    authorsHtml: `<strong>Kailin Li</strong>,
      <a href="">Lixin Yang</a>,
      <a href="">Zenan Lin</a>,
      <a href="">Jian Xu</a>,
      <a href="">Xinyu Zhan</a>,
      <a href="">Yifei Zhao</a>,
      <a href="">Pengxiang Zhu</a>,
      <a href="">Wenxiong Kang</a>,
      <a href="">Kejian Wu</a>,
      <a href="https://www.mvig.org">Cewu Lu</a>`,
    venueHtml: `<strong><em>AAAI</em>, 2024</strong>`,
    linksHtml: `<a href="https://kailinli.github.io/FAVOR/">project page</a>`,
    abstractHtml: `Rearranging objects is key in human-environment interaction, and creating natural sequences of such
      motions is crucial in AR/VR and CG. Our work presents <span
      class="small-caps">Favor</span>, a unique dataset that captures
      full-body virtual object rearrangement motions through motion capture and AR glasses. We also
      introduce a new pipeline, <span class="small-caps">Favorite</span>, for generating
      lifelike digital human rearrangement motions
      driven by commands. Our experiments show that <span class="small-caps">Favor</span>
      and <span class="small-caps">Favorite</span> produce high-fidelity motion
      sequences.`
  },
  {
    id: "chord",
    media: {
      image: "images/chord_before.png",
      video: "images/chord_teaser.mp4",
      ratio: "16 / 9"
    },
    titleHref: "#",
    titleHtml: `<span class="small-caps">Chord</span>: Category-level in-Hand Object Reconstruction via Shape Deformation`,
    authorsHtml: `<strong>Kailin Li</strong>,
      <a href="">Lixin Yang</a>,
      <a href="">Haoyu Zhen</a>
      <a href="">Zenan Lin</a>,
      <a href="">Xinyu Zhan</a>,
      <a href="">Licheng Zhong</a>,
      <a href="">Jian Xu</a>,
      <a href="">Kejian Wu</a>,
      <a href="https://www.mvig.org">Cewu Lu</a>`,
    venueHtml: `<strong><em>ICCV</em>, 2023</strong>`,
    linksHtml: `<a href="https://kailinli.github.io/CHORD/">project page</a>
      /
      <a href="https://arxiv.org/abs/2308.10574">arxiv</a>
      /
      <a href="https://huggingface.co/datasets/LiKailin/COMIC">dataset</a>
      /
      <a href="https://github.com/anyeZHY/PyBlend">PyBlend</a>`,
    abstractHtml: `We proposed a new method <span class="small-caps">Chord</span> which exploits the
      categorical shape prior for reconstructing the
      shape of intra-class objects. In addition, we constructed a new dataset, COMIC, of category-level
      hand-object interaction. <span class="small-caps">Comic</span> encompasses a diverse
      collection of object instances, materials, hand
      interactions, and viewing directions, as illustrated.`
  },
  {
    id: "oakink",
    media: {
      image: "images/oakink_before.png",
      hoverImage: "images/oakink_after.png",
      ratio: "16 / 9"
    },
    titleHref: "#",
    titleHtml: `OakInk: A Large-scale Knowledge Repository for Understanding Hand-Object Interaction`,
    authorsHtml: `<a href="https://lixiny.github.io">Lixin Yang</a>*,
      <strong>Kailin Li</strong>*,
      <a href="#">Xinyu Zhan</a>*,
      <a href="#">Fei Wu</a>,
      <a href="https://anran-xu.github.io">Anran Xu</a>,
      <a href="https://liuliu66.github.io">Liu Liu</a>,
      <a href="https://www.mvig.org">Cewu Lu</a>`,
    noteHtml: `(*=equal contribution)`,
    venueHtml: `<strong><em>CVPR</em>, 2022</strong>`,
    linksHtml: `<a href="https://github.com/lixiny/OakInk">project</a>
      /
      <a href="https://arxiv.org/abs/2203.15709">arxiv</a>
      /
      <a href="https://github.com/lixiny/OakInk">code</a>
      /
      <a href="https://github.com/lixiny/OakInk">dataset</a>`,
    abstractHtml: `Learning how humans manipulate objects requires machines to acquire knowledge from two perspectives:
      one for understanding object affordances and the other for learning human interactions based on
      affordances. In this work, we propose a multi-modal and rich-annotated knowledge repository,
      <strong>OakInk</strong>,
      for the visual and cognitive understanding of hand-object interactions. Check our website for more
      details!`
  },
  {
    id: "artiboost",
    media: {
      image: "images/artiboost_before.png",
      hoverImage: "images/artiboost_after.jpg",
      ratio: "16 / 9"
    },
    titleHref: "#",
    titleHtml: `ArtiBoost: Boosting Articulated 3D Hand-Object Pose Estimation via Online Exploration and Synthesis`,
    authorsHtml: `<a href="https://lixiny.github.io">Lixin Yang</a>*,
      <strong>Kailin Li</strong>*,
      <a href="#">Xinyu Zhan</a>,
      <a href="https://lyuj1998.github.io">Jun Lv</a>,
      <a href="https://wenqiangx.github.io/robotflowproject/">Wenqiang Xu</a>,
      <a href="https://jeffli.site">Jiefeng Li</a>,
      <a href="https://www.mvig.org">Cewu Lu</a>`,
    noteHtml: `(*=equal contribution)`,
    venueHtml: `<strong><em>CVPR</em>, 2022</strong> <strong class="award">(Oral Presentation)</strong>`,
    linksHtml: `<a href="#">project</a>
      /
      <a href="https://arxiv.org/abs/2109.05488">arxiv</a>
      /
      <a href="https://github.com/MVIG-SJTU/ArtiBoost">code</a>`,
    abstractHtml: `We propose a lightweight online data enrichment method that boosts articulated hand-object pose
      estimation
      from the data perspective.
      During training, ArtiBoost alternatively performs data exploration and synthesis.
      Even with a simple baseline, our method can boost it to outperform the previous SOTA on several
      hand-object benchmarks.`
  },
  {
    id: "dart",
    media: {
      image: "images/DART.png",
      ratio: "4 / 3"
    },
    titleHref: "#",
    titleHtml: `DART: Articulated Hand Model with Diverse Accessories and Rich Textures`,
    authorsHtml: `<a>Daiheng Gao</a>*,
      <a href="https://xiuyuliang.cn">Yuliang Xiu</a>*,
      <strong>Kailin Li</strong>*,
      <a href="https://lixiny.github.io">Lixin Yang</a>*,
      <br>
      <a>Feng Wang</a>, <a>Peng Zhang</a>, <a>Bang Zhang</a>,
      <a href="https://www.mvig.org">Cewu Lu</a>,
      <a href="https://www.cs.sfu.ca/~pingtan/">Ping Tan</a>`,
    noteHtml: `(*=equal contribution)`,
    venueHtml: `<strong><em>NeurIPS</em>, 2022</strong> <em> - Datasets and Benchmarks Track</em>`,
    linksHtml: `<a href="https://dart20220.github.io">project (dataset)</a>
      /
      <a href="https://openreview.net/forum?id=FPgCB_Z_0O">paper</a>
      /
      <a href="#">arxiv</a>
      /
      <a href="https://github.com/DART2022/DARTset">code</a>
      /
      <a href="https://www.youtube.com/watch?v=VvlUYe-9b7U&feature=youtu.be">video</a>`,
    abstractHtml: `In this paper, we extend MANO with more Diverse Accessories and Rich Textures, namely DART.
      DART is comprised of 325 exquisite hand-crafted texture maps which vary in appearance and cover
      different kinds of blemishes, make-ups, and accessories.
      We also generate large-scale (800K), diverse, and high-fidelity hand images, paired with
      perfect-aligned 3D labels, called DARTset.`
  },
  {
    id: "telecatch",
    media: {
      image: "images/telecatch.png",
      ratio: "16 / 9"
    },
    titleHref: "https://arxiv.org/abs/2603.28427",
    titleHtml: `Tele-Catch: Adaptive Teleoperation for Dexterous Dynamic 3D Object Catching`,
    authorsHtml: `<a>Weiguang Zhao</a>,
      <a>Junting Dong</a>,
      <a>Rui Zhang</a>,
      <strong>Kailin Li</strong>,
      <a>Qin Zhao</a>,
      <a>Kaizhu Huang</a>`,
    venueHtml: `<strong><em>arXiv</em>, 2026</strong>`,
    linksHtml: `<a href="https://arxiv.org/abs/2603.28427">arxiv</a>`,
    abstractHtml: `<span class="small-caps">Tele-Catch</span> studies dexterous teleoperation for dynamic
      object catching, where objects move before contact and pure human teleoperation is often limited by
      timing, pose, and force errors. The framework combines glove-based human commands with autonomous
      diffusion-policy control through a dynamics-aware integration mechanism, and uses unsupervised
      point-cloud representations for geometry-aware decisions. It improves catching accuracy and
      robustness across dexterous hand embodiments and unseen object categories.`
  },
  {
    id: "oakink2",
    media: {
      image: "images/oakink2_begin.png",
      hoverImage: "images/oakink2_after.png",
      ratio: "16 / 9"
    },
    titleHref: "#",
    titleHtml: `OAKINK2: A Dataset of Bimanual Hands-Object Manipulation in Complex Task Completion`,
    authorsHtml: `<a href="">Xinyu Zhan</a>*,
      <a href="">Lixin Yang</a>*,
      <a href="">Yifei Zhao</a>,
      <a href="">Kangrui Mao</a>,
      <a href="">Hanlin Xu</a>,
      <a href="">Zenan Lin</a>,
      <strong>Kailin Li</strong>,
      <a href="https://www.mvig.org">Cewu Lu</a>`,
    venueHtml: `<strong><em>CVPR</em>, 2024</strong>`,
    linksHtml: `<a href="https://oakink.net/v2/">project page</a>
      /
      <a href="https://arxiv.org/abs/2403.19417">arxiv</a>`,
    abstractHtml: `OAKINK2 is a rich dataset focusing on bimanual object manipulation tasks involved in complex daily
      activities. It introduces a unique three-tiered abstraction structure—Affordance, Primitive Task,
      and Complex Task—to systematically organize task representations. By emphasizing an object-centric
      approach, the dataset captures multi-view imagery and precise annotations of human and object poses,
      aiding in applications like interaction reconstruction and motion synthesis. Furthermore, we propose
      a Complex Task Completion framework that utilizes Large Language Models to break down complex
      activities into Primitive Tasks and a Motion Fulfillment Model to generate corresponding bimanual
      motions.`
  },
  {
    id: "color-neus",
    media: {
      image: "images/Color_NeuS_ghostbear.jpg",
      video: "images/Color_NeuS_ghostbear.mp4",
      ratio: "16 / 9"
    },
    titleHref: "#",
    titleHtml: `Color-NeuS: Reconstructing Neural Implicit Surfaces with Color`,
    authorsHtml: `<a>Licheng Zhong</a>*,
      <a href="">Lixin Yang</a>*,
      <strong>Kailin Li</strong>,
      <a href="">Haoyu Zhen</a>
      <a href="">Mei Han</a>,
      <a href="https://www.mvig.org">Cewu Lu</a>,`,
    venueHtml: `<strong><em>3DV</em>, 2024</strong>`,
    linksHtml: `<a href="https://colmar-zlicheng.github.io/color_neus/">project page</a>
      /
      <a href="https://arxiv.org/abs/2308.06962">arxiv</a>
      /
      <a href="https://github.com/Colmar-zlicheng/Color-NeuS">code</a>
      /
      <a href="https://drive.google.com/drive/folders/1C6vcRiy_MFMtsaR8AydRAPrLIkok-tJm">data</a>`,
    abstractHtml: `Color-NeuS focuses on mesh reconstruction with color. We remove view-dependent color while using a
      relighting network to maintain volume rendering performance. Mesh is extracted from the SDF network,
      and vertex color is derived from the global color network. We conceived a in hand object scanning
      task and gathered several videos for it to evaluate Color-NeuS.`
  },
  {
    id: "cpf",
    media: {
      image: "images/cpf_before.jpg",
      hoverImage: "images/cpf_after.png",
      ratio: "16 / 9"
    },
    titleHref: "https://lixiny.github.io/CPF",
    titleHtml: `CPF: Learning a Contact Potential Field to Model the Hand-Object Interaction`,
    authorsHtml: `<a href="https://lixiny.github.io">Lixin Yang</a>,
      <a href="#">Xinyu Zhan</a>,
      <strong>Kailin Li</strong>,
      <a href="https://wenqiangx.github.io/robotflowproject/">Wenqiang Xu</a>,
      <a href="https://jeffli.site">Jiefeng Li</a>,
      <a href="https://www.mvig.org">Cewu Lu</a>`,
    venueHtml: `<strong><em>ICCV</em>, 2021</strong>`,
    linksHtml: `<a href="https://lixiny.github.io/CPF">project</a>
      /
      <a
      href="https://openaccess.thecvf.com/content/ICCV2021/html/Yang_CPF_Learning_a_Contact_Potential_Field_To_Model_the_Hand-Object_ICCV_2021_paper.html">paper</a>
      /
      <a
      href="https://openaccess.thecvf.com/content/ICCV2021/supplemental/Yang_CPF_Learning_a_ICCV_2021_supplemental.pdf">supp</a>
      /
      <a href="https://arxiv.org/abs/2012.00924">arxiv</a>
      /
      <a href="https://github.com/lixiny/CPF">code</a>
      /
      <a href="https://zhuanlan.zhihu.com/p/406470702">知乎</a>`,
    abstractHtml: `We highlight contact in the hand-object interaction modeling task by proposing an
      explicit representation named Contact Potential Field (CPF). In CPF, we treat each contacting
      hand-object
      vertex pair as a spring-mass system, Hence the whole system forms a potential field with minimal
      elastic
      energy
      at the grasp position.`
  }
];
