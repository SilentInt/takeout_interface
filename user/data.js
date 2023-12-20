let login_success = {
  code: 1,
  msg: "登陆成功",
  data: {
    token: "123456789",
  },
};

let login_failed = {
  code: 0,
  msg: "密码错误",
};

let get_userinfo = {
  code: 1,
  msg: "获取用户信息成功",
  data: {
    id: 1,
    name: "张三",
    phone: "133-2333-2333",
    status: 1,
    avatar: "https://s2.loli.net/2023/12/19/GMLN24ymStvr1nA.png",
    regtime: "2020-01-01",
  },
};

let update_userinfo = {
  code: 1,
  msg: "更新用户信息成功",
};

let dish_page = {
  total: 20,
  page: 1,
  size: 20,
  current: 1,
  records: [
    {
      id: 1,
      cid: 1,
      name: "菜品1",
      cover:
        "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg@3000w_1l_0o_100sh.jpg",
      descr: "菜品1的描述",
      price: 1,
      status: 1,
      discount: 1,
    },
    {
      id: 2,
      cid: 2,
      name: "菜品2",
      cover:
        "https://img.zcool.cn/community/016fb15d9c5dc6a801211d53d6496d.jpg@1280w_1l_2o_100sh.jpg",
      descr: "菜品2的描述",
      price: 2,
      status: 0,
      discount: 2,
    },
  ],
};

let get_dish_list = {
  code: 1,
  msg: "获取菜品列表成功",
  data: dish_page,
};

let get_category_list = {
  code: 1,
  msg: "获取菜品分类列表成功",
  data: [
    {
      id: 1,
      name: "主食",
      status: 1,
    },
    {
      id: 2,
      name: "小菜",
      status: 0,
    },
    {
      id: 3,
      name: "爆炒家常菜",
      status: 1,
    },
  ],
};

let restaurant_page = [
  {
    id: 1,
    name: "大饭桶猫咪",
    phone: "133-2333-2333",
    announce: "今日特价: 猫粮八折",
    address: "地球村大大饭桶路1号",
    cover: "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg",
    sale: 10000,
    mark: 4.5,
    percent: 0.1,
    regtime: "2020-01-01 00:00:00",
    status: 1,
  },
  {
    id: 2,
    name: "饭桶猫咪",
    phone: "133-2333-2333",
    announce: "今日特价: 猫粮八折",
    address: "地球村大大饭桶路1号",
    cover: "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg",
    sale: 10000,
    mark: 4.5,
    percent: 0.1,
    regtime: "2020-01-01 00:00:00",
    status: 1,
  },
];

let get_restaurant_list = {
  code: 1,
  msg: "获取餐厅列表成功",
  data: {
    total: 20,
    page: 1,
    size: 20,
    current: 1,
    records: restaurant_page,
  },
};

let restaurant_info = {
  code: 1,
  msg: "获取餐厅信息成功",
  data: {
    id: 1,
    name: "大饭桶猫咪",
    phone: "133-2333-2333",
    announce:
      "今日特价: 猫粮八折, 发出噼里啪啦的猫猫叫声可享受折上折,外卖可以派送到宿舍楼下哦!今日特价: 猫粮八折, 发出噼里啪啦的猫猫叫声可享受折上折,外卖可以派送到宿舍楼下哦!",
    address: "地球村大大饭桶路1号",
    cover: "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg",
    sale: 10000,
    mark: 4.5,
    percent: 0.1,
    regtime: "2020-01-01 00:00:00",
    status: 1,
  },
};

let order_list_page = {
  total: 4,
  page: 1,
  size: 20,
  current: 1,
  records: [
    {
      id: 1,
      user: {
        id: 1,
        name: "张三",
        phone: "133-2333-2333",
        status: 1,
      },
      restaurant: {
        id: 1,
        name: "大饭桶猫咪",
        phone: "133-2333-2333",
        announce: "今日特价: 猫粮八折",
        address: "地球村大大饭桶路1号",
        cover:
          "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg",
        sale: 10000,
        mark: 4.5,
        percent: 0.1,
        regtime: "2020-01-01 00:00:00",
        status: 1,
      },
      address: {
        id: 1,
        uid: 1,
        name: "张三",
        phone: "133-2333-2333",
        detail: "地球村大大饭桶路1号",
        status: 1,
      },
      time: "2020-01-01 00:00:00",
      status: 1,
      totalprice: 2,
      create_time: "2020-01-01 00:00:00",
      comment: "菜品很好吃",
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "李四",
        phone: "133-2333-2333",
        status: 1,
      },
      restaurant: {
        id: 1,
        name: "大饭桶猫咪",
        phone: "133-2333-2333",
        announce: "今日特价: 猫粮八折",
        address: "地球村大大饭桶路1号",
        cover:
          "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg",
        sale: 10000,
        mark: 4.5,
        percent: 0.1,
        regtime: "2020-01-01 00:00:00",
        status: 1,
      },
      address: {
        id: 1,
        uid: 1,
        name: "张三",
        phone: "133-2333-2333",
        detail: "地球村大大饭桶路1号",
        status: 1,
      },
      time: "2020-01-01 00:00:00",
      status: 1,
      totalprice: 2,
      create_time: "2020-01-01 00:00:00",
      comment: "菜品不好吃",
    },
    {
      id: 3,
      user: {
        id: 2,
        name: "李四",
        phone: "133-2333-2333",
        status: 1,
      },
      restaurant: {
        id: 1,
        name: "大饭桶猫咪",
        phone: "133-2333-2333",
        announce: "今日特价: 猫粮八折",
        address: "地球村大大饭桶路1号",
        cover:
          "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg",
        sale: 10000,
        mark: 4.5,
        percent: 0.1,
        regtime: "2020-01-01 00:00:00",
        status: 1,
      },
      address: {
        id: 1,
        uid: 1,
        name: "张三",
        phone: "133-2333-2333",
        detail: "地球村大大饭桶路1号",
        status: 1,
      },
      time: "2020-01-01 00:00:00",
      status: 1,
      totalprice: 2,
      create_time: "2020-01-01 00:00:00",
      comment: "菜品不好吃",
    },
    {
      id: 4,
      user: {
        id: 2,
        name: "李四",
        phone: "133-2333-2333",
        status: 1,
      },
      restaurant: {
        id: 1,
        name: "大饭桶猫咪",
        phone: "133-2333-2333",
        announce: "今日特价: 猫粮八折",
        address: "地球村大大饭桶路1号",
        cover:
          "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg",
        sale: 10000,
        mark: 4.5,
        percent: 0.1,
        regtime: "2020-01-01 00:00:00",
        status: 1,
      },
      address: {
        id: 1,
        uid: 1,
        name: "张三",
        phone: "133-2333-2333",
        detail: "地球村大大饭桶路1号",
        status: 1,
      },
      time: "2020-01-01 00:00:00",
      status: 1,
      totalprice: 2,
      create_time: "2020-01-01 00:00:00",
      comment: "菜品不好吃",
    },
  ],
};

let order_list = {
  code: 1,
  msg: "获取订单列表成功",
  data: order_list_page,
};

let order_detail = {
  code: 1,
  msg: "获取订单详情成功",
  data: [
    {
      id: 1,
      dish: {
        id: 1,
        name: "菜品1",
        price: 1,
      },
      quantity: 2,
      price: 2,
      mark: 4.5,
    },
    {
      id: 2,
      dish: {
        id: 2,
        name: "菜品2",
        price: 2,
      },
      quantity: 1,
      price: 2,
      mark: 4.5,
    },
  ],
};

let shopcart_items = [
  {
    id: 1,
    dish: {
      id: 1,
      name: "菜品1",
      price: 1,
      descr: "菜品1的描述",
      status: 1,
      discount: 0.2,
      cover:
        "https://img.zcool.cn/community/01de055d4bc6e6a8012187f4b252ce.jpg",
    },
    quantity: 2,
    amount: 2,
  },
  {
    id: 2,
    dish: {
      id: 2,
      name: "菜品2",
      price: 2,
      descr: "菜品2的描述",
      status: 1,
      discount: 0.2,
      cover:
        "https://img.zcool.cn/community/016fb15d9c5dc6a801211d53d6496d.jpg",
    },
    quantity: 1,
    amount: 2,
  },
];

let get_cart_list = {
  code: 1,
  msg: "获取购物车列表成功",
  data: shopcart_items,
};

let cart_update = {
  code: 1,
  msg: "更新购物车成功",
};

let address_list = {
  code: 1,
  msg: "获取地址列表成功",
  data: [
    {
      id: 1,
      uid: 1,
      name: "张三",
      phone: "133-2333-2333",
      detail: "地球村大大饭桶路1号",
      status: 1,
    },
    {
      id: 2,
      uid: 1,
      name: "李四",
      phone: "133-2333-2333",
      detail: "地球村大大饭桶路1号",
      status: 3,
    },
  ],
};

let address_status_update = {
  code: 1,
  msg: "更新地址成功",
};

let order_add = {
  code: 1,
  msg: "下单成功",
};

let address_add = {
  code: 1,
  msg: "添加地址成功",
};

module.exports = {
  //更根据你自己的data格式导出哟
  "/login": login_success,
  "/dish/list": get_dish_list,
  "/category/list": get_category_list,
  "/restaurant/list": get_restaurant_list,
  "/restaurant/info": restaurant_info,
  "/order/list": order_list,
  "/order/detail": order_detail,
  "/order/add": order_add,
  "/cart/list": get_cart_list,
  "/cart/update": cart_update,
  "/address/list": address_list,
  "/address/update": address_status_update,
  "/address/add": address_add,
  "/user/info": get_userinfo,
  "/user/update": update_userinfo,
};
