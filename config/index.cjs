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
  },

  IS_SHOW_COLOR: true,

  PROVINCE: '青岛',
  CITY: '平度市',

  USERS: [
    {
      PROVINCE: '青岛',
      CITY: '平度市',
      // 想要发送的人的名字
      name: '雯雯',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCIqJ6sLQd7lR3ib9pPT3wr_LHQE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Tak__ixhPwYLIGlHCbaXD5yvVd2Gs13s4Q_Q1Fhe14w',
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
      PROVINCE: '山东',
      CITY: '青岛',
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oCIqJ6pISvIoTThAWoqch66nR2nU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Tak__ixhPwYLIGlHCbaXD5yvVd2Gs13s4Q_Q1Fhe14w',
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

}

module.exports = USER_CONFIG

