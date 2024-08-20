// 假设你的JSON数据URL是'data.json'  
const dataUrl = 'data.json';  
      
fetch(dataUrl)  
    .then(response => response.json()) // 解析JSON  
    .then(data => {  
        // 获取表格元素  
        const table = document.getElementById('data-table');  
  
        // 遍历JSON数据并添加行  
        data.forEach(item => {  
            const row = table.insertRow(-1); // 在表格末尾插入新行  
            const wordCell = row.insertCell(0); // 在新行中插入单元格  
            const pronunciationCell = row.insertCell(1);  
            const meanCell = row.insertCell(2);  
            const helpCell = row.insertCell(3);
            const contributorCell = row.insertCell(4);
  
            // 设置单元格内容  
            wordCell.textContent = item.word;  
            pronunciationCell.textContent = item.pronunciation;  
            meanCell.textContent = item.mean; 
            helpCell.textContent = item.help;
            contributorCell.textContent = item.contributor;
        });  
    })  
    .catch(error => console.error('Error:', error)); // 处理错误  