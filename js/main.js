/* =========================================================
   城市详情：数据 + 弹窗交互
   思路：卡片上只存一个 data-city，点谁就把谁的 id 交给 openDetail()
   ========================================================= */

/* ---------- 1. 详情数据 ---------- */
const DETAILS = {
  luoyang: {
    kicker: '十三朝古都',
    name: '洛阳',
    sub: '河南 · 中原',
    intro:
      '洛阳的好，一半在石窟和古墓里，一半在早上那碗牛肉汤里。城市不大，两天能走完，时间紧的话一天也能看到精华。',
    musts: [
      {
        title: '龙门石窟',
        text: '从北魏一直凿到唐，卢舍那大佛在奉先寺。建议留 3 小时，下午四点以后光线斜着打在石壁上最好看。'
      },
      {
        title: '应天门 · 洛邑古城',
        text: '应天门晚上有灯光秀，隔街的洛邑古城是仿古街区，晚上灯亮起来适合慢慢逛。'
      },
      {
        title: '老城十字街',
        text: '晚上六点后出摊，水席、浆面条、不翻汤都在这一片，人均三四十就能吃撑。'
      }
    ],
    plan: [
      { time: '08:30', text: '老城喝一碗牛肉汤，配饼丝' },
      { time: '09:30', text: '龙门石窟，慢慢走到奉先寺' },
      { time: '14:00', text: '洛阳博物馆或白马寺，二选一' },
      { time: '18:30', text: '应天门看灯，洛邑古城吃晚饭' }
    ],
    tip: '门票和夜游时间常有调整，出发前查景区官方公众号；想看牡丹就挑 4 月中下旬。'
  },

  chongqing: {
    kicker: '8D 魔幻山城',
    name: '重庆',
    sub: '重庆 · 山城',
    intro:
      '在重庆别相信地图上的直线距离。上坡、下坡、穿楼、过江，一天走下来腿会酸，但每个转角都有东西看。',
    musts: [
      {
        title: '洪崖洞',
        text: '晚上七点亮灯。别挤在景区里，去对岸的千厮门大桥上拍全景，人和灯的比例才对。'
      },
      {
        title: '李子坝',
        text: '轻轨 2 号线从居民楼里穿过去，楼下就是观景台，等两班车一定能拍到。'
      },
      {
        title: '长江索道',
        text: '单程 4 分钟，过江看两岸。早上人少，节假日建议现场扫码买票。'
      }
    ],
    plan: [
      { time: '10:00', text: '李子坝看轻轨穿楼' },
      { time: '11:30', text: '解放碑、八一好吃街解决午饭' },
      { time: '15:00', text: '鹅岭二厂 + 山城步道，走到腿软' },
      { time: '19:00', text: '洪崖洞夜景，去桥上拍全景' }
    ],
    tip: '火锅点微辣也很辣，怕辣就直接要鸳鸯锅；夏天真的热，随身带瓶水。'
  },

  xian: {
    kicker: '汉唐故都',
    name: '西安',
    sub: '陕西 · 关中',
    intro:
      '西安适合把“看”和“吃”分开安排：白天交给城墙和博物馆，晚上交给回民街和城墙根的夜风。',
    musts: [
      {
        title: '西安城墙',
        text: '全长 13.7 公里，租辆自行车骑一圈大约 1.5 小时，傍晚上去光线最好，也不晒。'
      },
      {
        title: '陕西历史博物馆',
        text: '免费但必须提前预约，何家村窖藏那间值得多待一会儿。周一闭馆。'
      },
      {
        title: '大雁塔',
        text: '北广场晚上有音乐喷泉，看完顺路走大唐不夜城，一路都是灯。'
      }
    ],
    plan: [
      { time: '09:00', text: '永宁门上城墙，骑行一圈' },
      { time: '12:00', text: '洒金桥吃泡馍和小酥肉' },
      { time: '14:30', text: '陕西历史博物馆' },
      { time: '19:00', text: '大雁塔喷泉，回民街宵夜' }
    ],
    tip: '回民街偏游客价，本地人更多去洒金桥；兵马俑在临潼，要单独留半天。'
  },

  suzhou: {
    kicker: '江南水乡',
    name: '苏州',
    sub: '江苏 · 江南',
    intro:
      '苏州的园林要趁早，水巷要趁晚。走累了就找家茶馆，点一壶茶听一段评弹，半天就过去了。',
    musts: [
      {
        title: '拙政园',
        text: '开园第一波人最少，进门先往西边的水廊走，逆着人流才看得清。'
      },
      {
        title: '平江路',
        text: '一条河一条街，晚上灯笼亮起来更好看，中间有几家评弹茶馆，几十块钱一场。'
      },
      {
        title: '苏州博物馆',
        text: '贝聿铭设计的，免费但要预约。建筑本身比展品更值得看，记得留一小时。'
      }
    ],
    plan: [
      { time: '08:00', text: '拙政园，赶第一批进园' },
      { time: '11:00', text: '平江路走一段，听一场评弹' },
      { time: '14:00', text: '苏州博物馆' },
      { time: '19:00', text: '山塘街夜游，看灯和水' }
    ],
    tip: '园林和博物馆都要在公众号提前预约；6 月梅雨季雨多，带把伞反而更有江南味道。'
  }
};

/* ---------- 2. 取元素 ---------- */
const dialog = document.querySelector('#detail');
const slot = dialog.querySelector('.detail-scroll');
const closeBtn = dialog.querySelector('.detail-close');
const cards = document.querySelectorAll('.card');

/* ---------- 3. 把数据拼成 HTML ---------- */
function detailHTML(city) {
  const musts = city.musts
    .map((item) => `<li><b>${item.title}</b><span>${item.text}</span></li>`)
    .join('');

  const plan = city.plan
    .map((item) => `<li><time>${item.time}</time><span>${item.text}</span></li>`)
    .join('');

  return `
    <p class="detail-kicker">${city.kicker}</p>
    <h2 class="detail-name" id="detail-name">${city.name}</h2>
    <p class="detail-sub">${city.sub}</p>
    <p class="detail-intro">${city.intro}</p>

    <h3 class="detail-h3">三个必去</h3>
    <ul class="detail-musts">${musts}</ul>

    <h3 class="detail-h3">一日路线</h3>
    <ol class="detail-plan">${plan}</ol>

    <p class="detail-tip">${city.tip}</p>
  `;
}

/* ---------- 4. 打开 / 关闭 ---------- */
function openDetail(id) {
  const city = DETAILS[id];
  if (!city) return;

  slot.innerHTML = detailHTML(city);
  slot.scrollTop = 0;
  document.body.classList.add('no-scroll');
  dialog.showModal();
}

function closeDetail() {
  dialog.close();
}

/* 点卡片：从 data-city 拿到 id */
cards.forEach((card) => {
  card.addEventListener('click', () => openDetail(card.dataset.city));
});

/* 键盘也能打开（卡片是 div，所以要自己处理回车和空格） */
cards.forEach((card) => {
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDetail(card.dataset.city);
    }
  });
});

/* 关闭按钮 */
closeBtn.addEventListener('click', closeDetail);

/* 点遮罩关闭：点在 dialog 本身（而不是内容）上，说明点的是背景 */
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeDetail();
});

/* 关闭后把滚动还给页面（Esc 关闭也要走这里） */
dialog.addEventListener('close', () => {
  document.body.classList.remove('no-scroll');
});
