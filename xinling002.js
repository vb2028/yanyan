
document.getElementById('myForm').addEventListener('submit', function(event) {
    // 阻止表单的默认提交行为，因为我们用AJAX或仅做页面内处理
    event.preventDefault();

    // 获取表单输入的值
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // 简单的验证（这里仅为示例，实际中应更严格）
    if (name && email) {
        // 显示提交成功消息
        document.getElementById('message').textContent = '表单提交成功！';

        // TODO: 在这里可以添加发送数据到服务器的代码（AJAX请求等）

        // 清除表单输入以便重新输入
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('请填写所有字段！');
    }
});
