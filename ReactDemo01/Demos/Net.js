
/**
 * Created by sml2 on 2017/9/2.
 */
fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
    })
})


fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'key1=value1&key2=value2'
})
//
// getMoviesFromApiAsync() {
//     return fetch('https://facebook.github.io/react-native/movies.json')
//         .then((response) => response.json())
//         .then((responseJson) => {
//             return responseJson.movies;
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

//
// 你也可以在React Native应用中使用ES7标准中的async/await 语法：
//
// // 注意这个方法前面有async关键字
// async getMoviesFromApi() {
//     try {
//         // 注意这里的await语句，其所在的函数必须有async关键字声明
//         let response = await fetch('https://facebook.github.io/react-native/movies.json');
//         let responseJson = await response.json();
//         return responseJson.movies;
//     } catch(error) {
//         console.error(error);
//     }
// }

//
// React Native中已经内置了XMLHttpRequest API(也就是俗称的ajax)。一些基于XMLHttpRequest封装的第三方库也可以使用，例如frisbee或是axios等。但注意不能使用jQuery，因为jQuery中还使用了很多浏览器中才有而RN中没有的东西（所以也不是所有web中的ajax库都可以直接使用）。
//
// var request = new XMLHttpRequest();
// request.onreadystatechange = (e) => {
//     if (request.readyState !== 4) {
//         return;
//     }
//
//     if (request.status === 200) {
//         console.log('success', request.responseText);
//     } else {
//         console.warn('error');
//     }
// };
//
// request.open('GET', 'https://mywebsite.com/endpoint/');
// request.send();


// React Native还支持WebSocket，这种协议可以在单个TCP连接上提供全双工的通信信道。
//
// var ws = new WebSocket('ws://host.com/path');
//
// ws.onopen = () => {
//     // 打开一个连接
//
//     ws.send('something'); // 发送一个消息
// };
//
// ws.onmessage = (e) => {
//     // 接收到了一个消息
//     console.log(e.data);
// };
//
// ws.onerror = (e) => {
//     // 发生了一个错误
//     console.log(e.message);
// };
//
// ws.onclose = (e) => {
//     // 连接被关闭了
//     console.log(e.code, e.reason);
// };