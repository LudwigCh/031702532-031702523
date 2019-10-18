test('basic test', function() {
  expect(1);
  ok(true, 'this had better work.');
});


test('can access the DOM', function() {
  expect(1);
  var fixture = document.getElementById('qunit-fixture');
  equal(fixture.innerText || fixture.textContent, 'this had better work.', 'should be able to access the DOM.');
});

test('data test',function(){
  expect(1);
let str='导师：张三\n2010级博士生：天一、王二、吴五\n2011级硕士生：李四、王五、许六\n2012级硕士生：刘一、李二、李三\n2013级本科生：刘六、琪七、司四\n\n导师：阿龙\n2016级博士生：天\n2015级硕士生：李、王、许\n2016级硕士生：刘、李、李\n2017级本科生：刘、琪、司';

var tempp =[{id: "张三", parent: "#", text: "张三"},
{id: "2010级博士生", parent: "张三", text: "2010级博士生"},
{id: "天一", parent: "2010级博士生", text: "天一"},
 {id: "王二", parent: "2010级博士生", text: "王二"},
 {id: "吴五", parent: "2010级博士生", text: "吴五"},
 {id: "2011级硕士生", parent: "张三", text: "2011级硕士生"},
 {id: "李四", parent: "2011级硕士生", text: "李四"},
 {id: "王五", parent: "2011级硕士生", text: "王五"},
 {id: "许六", parent: "2011级硕士生", text: "许六"},
 {id: "2012级硕士生", parent: "张三", text: "2012级硕士生"},
 {id: "刘一", parent: "2012级硕士生", text: "刘一"},
 {id: "李二", parent: "2012级硕士生", text: "李二"},
 {id: "李三", parent: "2012级硕士生", text: "李三"},
 {id: "2013级本科生", parent: "张三", text: "2013级本科生"},
 {id: "刘六", parent: "2013级本科生", text: "刘六"},
 {id: "琪七", parent: "2013级本科生", text: "琪七"},
 {id: "司四", parent: "2013级本科生", text: "司四"},
 {id: "阿龙", parent: "#", text: "阿龙"},
 {id: "2016级博士生", parent: "阿龙", text: "2016级博士生"},
 {id: "天", parent: "2016级博士生", text: "天"},
 {id: "2015级硕士生", parent: "阿龙", text: "2015级硕士生"},
 {id: "李", parent: "2015级硕士生", text: "李"},
 {id: "王", parent: "2015级硕士生", text: "王"},
 {id: "许", parent: "2015级硕士生", text: "许"},
 {id: "2016级硕士生", parent: "阿龙", text: "2016级硕士生"},
 {id: "刘", parent: "2016级硕士生", text: "刘"},
 {id: "李", parent: "2016级硕士生", text: "李"},
 {id: "李", parent: "2016级硕士生", text: "李"},
 {id: "2017级本科生", parent: "阿龙", text: "2017级本科生"},
 {id: "刘", parent: "2017级本科生", text: "刘"},
 {id: "琪", parent: "2017级本科生", text: "琪"},
 {id: "司", parent: "2017级本科生", text: "司"}];
String.prototype.removeBlankLines = function () {
	return this.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')
	//去除字符串中的空行
}
function trimSpace(array){  
     for(var i = 0 ;i<array.length;i++)  
     {  
         if(array[i] == "" || array[i] == null || typeof(array[i]) == "undefined")  
         {  
                  array.splice(i,1);  
                  i= i-1;  

         }  
     }  
     return array;  
	 //去除字符数组中的空值
} 

  str=str.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g,'');
  var arrStr2=str.split("导师：");
  var result=[];

  arrStr2.map(k => {
  let  item1 = k.split("\n");
  item1=trimSpace(item1);
      var pa = item1[0];
      item1.map(i => {
          let  item = i.split("：");
          let cur = item[1]; 
          if (i.indexOf("级") == -1) {
          result.push({
            id: item[0],    
            parent: "#",
            text: item[0],
          })
              } 
               else 
              {
          result.push({
        id:item[0],
        parent:pa,
        text:item[0],
          })
              let eee=cur.split("、");
              eee.map(j => {
                  let  item2 = j;
                  result.push({
                      id:item2,
                      parent:item[0],
                      text:item2,
                  })
              })

            }
  })
  })
  
   deepEqual(result,tempp);
});