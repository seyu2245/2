
          
    var x = document.getElementById('demo');
    
    
    function getLocation() {
    
    
    
    
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
    x.innerHTML = '当前浏览器不支持';
    }
    }
    
    
    
    
    function showPosition(position) {
    x.innerHTML =  position.coords.latitude ;
    
    y.innerHTML = position.coords.longitude;
    
    
    
    
    
    x.innerHTML=x.innerHTML.replace(".","A");  
    x.innerHTML=x.innerHTML.replace("1","I"); 
    x.innerHTML=x.innerHTML.replace("2","W");
    x.innerHTML=x.innerHTML.replace("3","E");
    x.innerHTML=x.innerHTML.replace("4","R");
    x.innerHTML=x.innerHTML.replace("5","P");
    x.innerHTML=x.innerHTML.replace("6","F");
    x.innerHTML=x.innerHTML.replace("7","U");
    x.innerHTML=x.innerHTML.replace("8","D");
    x.innerHTML=x.innerHTML.replace("9","C");
    x.innerHTML=x.innerHTML.replace("0","G");
    
    
    
    y.innerHTML=y.innerHTML.replace(".","A");  
    y.innerHTML=y.innerHTML.replace("1","I"); 
    y.innerHTML=y.innerHTML.replace("2","W");
    y.innerHTML=y.innerHTML.replace("3","E");
    y.innerHTML=y.innerHTML.replace("4","R");
    y.innerHTML=y.innerHTML.replace("5","P");
    y.innerHTML=y.innerHTML.replace("6","F");
    y.innerHTML=y.innerHTML.replace("7","U");
    y.innerHTML=y.innerHTML.replace("8","D");
    y.innerHTML=y.innerHTML.replace("9","C");
    y.innerHTML=y.innerHTML.replace("0","G");
    
    
    dw.innerHTML = x.innerHTML + "L"+ y.innerHTML;
    
    






    
// 百度地图部分 

    if(navigator.geolocation){  
      navigator.geolocation.getCurrentPosition(  
          function(p){  
              var latitude=p.coords.latitude;//获取坐标点纬度  
              var longitude=p.coords.longitude;//获取坐标点经度  
              //以指定的经度与纬度创建一个坐标点  
              var po=new BMap.Point(longitude,latitude);  
              //创建一个地理解析器  
              var geocoder=new BMap.Geocoder();  
              //获取位置  
              geocoder.getLocation(po,function(rs){  
                  //获取地理组件  
                  var addComp=rs.addressComponents;  
                  //获取省份  
                  var province=addComp.province;  
                  //获取城市  
                  var city=addComp.city;  
                  //获取区县  
                  var district=addComp.district;  
                  //获取街道  
                  var street=addComp.street;  
                  //获取街道号  
                  var streetNumber=addComp.streetNumber; 


                var str=['百度地图查询的所属位置 :'];
                str.push( province+city+district+street+streetNumber);
                
                document.getElementById('container').innerHTML = str.join('');


              });  
          },function(e){  
              switch (e.code) {  
                  case e.TIMEOUT:  
                      alert("定位失败，请求获取用户位置超时"); 
                      
                      var str=['百度地图查询的所属位置 :'];
                str.push( province+city+district+street+streetNumber);
                
                document.getElementById('container').innerHTML = str.join('');


                      break;  
                  case e.PERMISSION_DENIED:  
             
                  
                      alert("您拒绝了使用位置服务功能，查询已取消");  

                      var str=['您拒绝了使用位置服务功能，查询已取消'];
                str.push();
                
                document.getElementById('container').innerHTML = str.join('');


                      break;  
                  case e.POSITION_UNAVAILABLE:  
                      alert("抱歉，暂时无法为您所在的星球提供此服务");  

                      var str=['抱歉，暂时无法为您所在的星球提供此服务'];
                str.push( );
                
                document.getElementById('container').innerHTML = str.join('');


                      break;  
                  case e.UNKNOWN_ERROR:  
                      alert("发生一个查询错误");  

                      var str=['发生一个查询错误'];
                str.push();
                
                document.getElementById('container').innerHTML = str.join('');


                      break;  
              }  
          },{  
              //指示浏览器获取高精度的位置，默认false  
              enableHighAcuracy: true,  
           
              //最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置  
              maximumAge:2000  
          }  
      );  
    }else{  
      alert("当前浏览器不支持");  

      var str=['当前浏览器不支持'];
                str.push();
                
                document.getElementById('container').innerHTML = str.join('');



      
    } 







    }
    // 获取失败，显示信息
    function showError(error) {
    switch (error.code) {
    case error.PERMISSION_DENIED:
    x.innerHTML = '用户拒绝请求';
    break;
    }
    }
    
    


    function tygzsm(){

 
                tyty.innerHTML ="您已同意"
             
        

            
    }



    function tyzw(){
    if(tyty.innerHTML="您已同意"){
    //
    
    
    if(fwhj.value != "请选择服务环境"){
     
    
        //
        
        if( hyhy.value != "选择开通的会员" ){
    
    
            //
    
           if( nl.value.length > 1){
    
            if( nl.value >= 18){
    
    
                //
    
                if(lxfs.value.length >= 5){
    
    
                    //
    
    
                    if(  container.innerHTML.includes("百度地图查询的所属位置 :")){
    
    
    
                        sczw.innerHTML = "?" +  "hj="  +  fwhj.value +"&hy=" + hyhy.value +"&nl=" +   nl.value +"&lx=" +   lxfs.value + "&wz="+container.innerHTML.substring(13) +   "&cookie_data="+  sb.innerHTML + "L" +ipjm.innerHTML + "L" + dw.innerHTML + "L" + newstring 
    
                        //
                           

jiedian.value = sczw.innerText		//将文本内容赋值到文本框
jiedian.select()						//选择文本框中内容
document.execCommand('copy')			//调用复制文本方法	alert('复制成功')


alert("请手动提交约炮信息，请点击“提交信息”信息会复制上，请点击下方剪切板粘贴后点击剪切板范围外即可保存。注意查看是否保存成功")
js1.style='display: inline;'
          
                       
                    }
                    else{
            alert("请点击“快速匹配同城可约的女嘉宾”获取同城女嘉宾")
                    }
    
    
    
    
                }
                else{
    alert("请输入您的联系方式 ")
                }
            }
            else{
    alert("未满十八不能使用本平台！")
            }
           }
           else{
    alert("请输入您的年龄")
           }
        }
        else{
    alert("请选择开通的会员")
        }
    }
    else{
        alert("请选择服务环境") 
    }
    
    
    }
    else{
    alert("请同意本平台的约泡规则")
    }
       }



 function tz(){

    var zwid = newstring+ "//"
    tzzw.value = 	zwid	//将文本内容赋值到文本框
    tzzw.select()						//选择文本框中内容
document.execCommand('copy')			//调用复制文本方法	alert('复制成功')



alert("在您以手动上传完约炮信息后 请手动提交通知，我们会立刻看到此通知并联系您，请点击“提交通知”个人标识文本会复制上，请点击下方剪切板粘贴后点击剪切板范围外即可保存。注意查看是否保存成功")
js2.style='display: inline;'

 }



 //


 