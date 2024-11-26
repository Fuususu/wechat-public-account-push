/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfc72c21072da3b62',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '65ecd79b901c872ad61055dc1dad04ba',
  
  SWITCH: {
       /** 每日天气 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      weather: true,
      // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      earthyLoveWords: true,
      /** 生日消息和节日消息 */
      // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
      birthdayMessage: true,
  },

 TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'f648c93eb61704cbdb2255b0098a3690',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 0,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    //networkHotType: 'default',
  },
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  USERS: [
    {
      // 想要发送的人的名字
      name: '雯雯',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCIqJ6sLQd7lR3ib9pPT3wr_LHQE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'QTlmEq3lRXZn9E5ZRTQhrbWZ0T9jkXXYmnOHXG6Mk7w',
      PROVINCE: '青岛',
      CITY: '平度市',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '雯雯', year: '2001', date: '09-06',
        },  
      ],
      
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-04-02' },
        // 结婚纪念日 
      ],

    },

    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCIqJ6pISvIoTThAWoqch66nR2nU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'QTlmEq3lRXZn9E5ZRTQhrbWZ0T9jkXXYmnOHXG6Mk7w',
      PROVINCE: '青岛',
      CITY: '即墨市',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-22',

      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://www.cctv.com/',

      // 专属节日提醒，
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '雯雯', year: '2001', date: '09-06',
      },
        
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-04-02' },
        // 结婚纪念日
      ],
    },
    
  ],



  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'duzwnmm1RA8RmuLdyRjuPR4XQipjOkghKOt8N_hUZ2Y',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCIqJ6pISvIoTThAWoqch66nR2nU	',
    }
  ],

  // 默认所在省份城市
  PROVINCE: '青岛',
  CITY: '平度市',

}

module.exports = USER_CONFIG

