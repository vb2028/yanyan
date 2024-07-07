

javascript

// 这是一个简单的JavaScript文件示例

// 定义一个函数，用于在控制台打印一条消息
function sayHello() {
    console.log("Hello, World!");
}

// 当文档加载完成时调用该函数
window.onload = function() {
    sayHello(); // 调用sayHello函数，将在控制台输出 "Hello, World!"

    // 你也可以在这里添加其他代码，这些代码将在页面加载完成后执行
    // 例如，为某个按钮添加点击事件监听器等

    // 假设你有一个ID为"myButton"的按钮
    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
        alert("你点击了按钮！");
    });
};


