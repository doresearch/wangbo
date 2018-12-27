// import echarts from './echarts.min.js' // 只有雷达图
// // let data = {
// //   userDimensionList: [
// //     {
// //       name: '动力',
// //       value: '2'
// //     },
// //     {
// //       name: '动力1',
// //       value: '2'
// //     },
// //     {
// //       name: '动力2',
// //       value: '2'
// //     },
// //     {
// //       name: '动力3',
// //       value: '2'
// //     },
// //     {
// //       name: '动力4',
// //       value: '2'
// //     }
// //   ],
// //   maxDimensionValue: 5,
// //   demensionStep: 10 // step跟着走
// // }

// let data = [
//   {
//     id: 196,
//     user_lid: '4289dc87cd0e4669a8c0c8dad84a568a',
//     season_class_lid: 'bf49ffa35949479fb1f5c52cbd7e',
//     trade_no: '18122016475511157',
//     season_start_time: 1543852799000,
//     season_end_time: 1544630399000,
//     commodity_type: 300100,
//     buy_way: 2,
//     status: 1,
//     create_time: 1545295677000,
//     update_time: 1545295677000
//   },
//   {
//     id: 197,
//     user_lid: '4289dc87cd0e4669a8c0c8dad84a568a',
//     season_class_lid: 'bf49ffa35949479fb1f5c52cbd7e',
//     trade_no: '181220164820-1949',
//     season_start_time: 1543852799000,
//     season_end_time: 1544630399000,
//     commodity_type: 300100,
//     buy_way: 2,
//     status: 1,
//     create_time: 1545295701000,
//     update_time: 1545295701000
//   }
// ]

// // 有一个选择

// renderRadar(data, document.getElementById('main'))

// function renderRadar(data, el, title = '王浩大傻逼', userName = '王浩大傻逼') {
//   let myChart = echarts.init(el)
//   let indicator = []
//   let value = []
//   let splitNumber = data.demensionStep

//   if (data.userDimensionList.length !== 5) {
//     return new Error('出现错误')
//   } else {
//     data.userDimensionList.map(item => {
//       indicator.push({ name: item.name, max: data.maxDimensionValue })
//       value.push(item.value)
//     })
//     let option = {
//       title: { text: userName + '的学习雷达图' },
//       tooltip: {},
//       legend: {
//         data: [title]
//       },
//       radar: {
//         // shape: 'circle',
//         name: {
//           textStyle: {
//             color: '#fff',
//             backgroundColor: '#999',
//             borderRadius: 3,
//             padding: [3, 5]
//           }
//         },
//         splitNumber,
//         indicator
//       },
//       series: [
//         {
//           name: '学生',
//           type: 'radar',
//           // areaStyle: {normal: {}},
//           data: [
//             {
//               value,
//               name: title
//             }
//           ]
//         }
//       ]
//     }

//     myChart.setOption(option)
//   }
// }

// class Niuqun {
//   constructor(number) {
//     let random = ~~(Math.random() * number)
//     this.male = random
//     this.female = number - random
//     this.all = number
//   }
// }

// // 第一年的时候

// let oneyear = new Niuqun(100)
// let twoyear = new Niuqun(oneyear.female)
// let threeyear = new Niuqun(twoyear.female)
// // 现在所有的牛为
// let all = oneyear.all + twoyear.all + threeyear.all
// console.log(all)
