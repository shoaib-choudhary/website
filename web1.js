        //comments
        
        /*primitives or value type
        strind
        number
        boolean
        undefined
        null
        
        let name='shoaib';
        let age=20;
        let isAllowed=true;
        let fname=undefined;
        let sname=null;
        console.log(name);
        console.log(age);
        console.log(isAllowed);
        console.log(fname);
        console.log(sname);
        let person ={
            name: 'shoaib',
            age:22
        };
        person.name='hello';
        console.log(person.name);
        
       let array1 =[1,2,3,4];
       array1[4]=5;
       array1[5]='abc';
       console.log(array1);
       let array2=['a','b','c','d'];
       console.log(array2);
       
      function greet(name,age){
        console.log('hello '+ name+' '+ age);
      }

      greet('asdfghjkl',22);
      greet('qwertyuio',23);

        function cube(num){
            a=num*num*num;
            console.log(a);
        }
        cube(4);

       function square(num){
            a=num*num;
            return a;
        }
        console.log(square(4));

        
        alert("Booooo.......!!!!");
        alert("Booooo.......");
        alert("Booooo.......?????");
        alert("Booooo.......");
        
       let a=10;
       a+=6;
       console.log(a);
       a-=2;
       console.log(a);
       a*=2;
       console.log(a);
       a/=2;
       console.log(a);
    
      console.log("hiii");
      document.write("hii")
      let a=1;
      while (a<10) {
        console.log("byy\n"+a)
        document.writeln("hii    "+a);
        a++;
    }
       
        for(a=10;a>=0;a--){
            if(a==5 ){
                break;
            }
            console.log("byy\n"+a)
            document.writeln("hii    "+a);
        }
        for(a=1;a<=10;a++){
            if(a==5 ){
                continue;
            }
            console.log("byy\n"+a)
            document.writeln("hii    "+a);
        } 

            console.log(Math.round(230.9));
            console.log(Math.floor(230.9));
            console.log(Math.ceil(230.9));
            console.log(Math.max(2, 4,7,3,8,9));
            console.log(Math.min(2, 4,7,3,8,9));
            console.log(Math.PI);
            let a=7;
            let b="asdfgh";
            console.log(a-b);
            console.log(typeof(a+b));
            console.log(a/b);
            console.log(a*b);
            
            
            let c=5;
            var a='as dHgh S"qw G"er/W//tA vb fgkl';
            let s='hi my name is abc and the .....'
            console.log(a.length)
            console.log(a.toUpperCase())
            console.log(a.toLowerCase())
            console.log(a.indexOf("p"))
            console.log(a);
            console.log(s);
            var s1="abc";
            var s2="acb";
            var s3="ABC";
            console.log(s1===s2);
            console.log(s1.toUpperCase()===s3);
            console.log(s.slice(10));
            console.log(s.slice(14,28));
            var d="meat, ham, salami, pork, beef, chcken";
            var arr=d.split(",");
            console.log(arr);
            
            var arr1=[];
            arr1[0]=1;
            arr1[1]=2;
            arr1[2]=3;
            arr1[3]=true;
            arr1[4]='abcde';
            arr1[5]=null;
            arr1[1]=false;            
            console.log(arr1);

            var arr2=["s",'a',100,10,20,false,'qwerty'];
            console.log(arr2);

            var arr3= new Array();
            console.log(arr3);
            console.log(arr2.length);
            console.log(arr2.sort()); 
            console.log(arr2.reverse());
             


            
            var car=new Object();
            car.speed=180;
            car.name="swift";
            console.log(car);
            console.log(car.speed);
            car.drive= function drive(){
                console.log("driving")
            };
            car.drive();
            
           
            

            var student={
                name1:"tom",
                age:22,
                pass:true,
                display:function display() {
                    console.log('My name is '+ this.name1 +' age is '+ this.age );
                    if(this.pass){console.log('is pass');}
                }
            };
            console.log(student.name1);
            console.log(student.age);
            console.log(student.pass);
            student.display();
           

            var car= function (max,driver){
                this.max=max;
                this.driver=driver;
                this.drive=function (s,t) {
                    console.log('driving the car at '+s*t+'the driver name is '+this.driver);
                };                
            }
            var car1=new car(100,'tom');
            var car2=new car(130,'tedd');
            var car3=new car(150,'ron');
            var car4=new car(170,'john');
            var car5=new car(90,'tommy');
            console.log(car1);
            console.log(car2);
            console.log(car3);
            console.log(car4);
            console.log(car5);
            

            let date1=new Date();
            console.log(date1);
            let date2= new Date(1234,8,21,10,30,12);
            console.log(date2);
            let date3= new Date(7765,0,9,20,55,44);
            console.log(date3);

            let bdate=new Date(2003,8,21,8,30,41);
            let bdate1=new Date(2003,8,21,8,30,41);
            console.log(bdate);
            console.log(bdate.getDate());
            console.log(bdate.getDay());
            console.log(bdate.getFullYear());
            console.log(bdate.getMonth());
            console.log(bdate.getHours());
            console.log(bdate.getMinutes());
            console.log(bdate.getSeconds());
            console.log(bdate.getTime());
            if (bdate.getTime==bdate1.getTime) {
                console.log('same');            
            } else {
                console.log('not same');
            }

            a=()=>"asdfgkl";
            document.getElementById("123").innerHTML=a();
            document.writeln(`asdfghjkl ${a} dfbhm, ${1234567890} Zxcvbnm, ${b}`)

            
            let a="shoaib";
            let b= 2025;
            console.log(`${a} "sfv" ${1234789} hello my name is ${a} and this is ${b}`);



        //arrow function practice
        let a=()=> console.log('asdfhkl');
        a();
        
        let b=(c,d) => {let r=c*d ; console.log(r);};
        b(5,10);
        
        let square=(num) => {console.log(num*num) };
        square(7);

        let oddeven= (num)=>{if (num%2==0) {
                console.log(`${num} is Even number`);
            }
            else{
                console.log(`${num} is Odd number`);
          }
       };
       oddeven(7);
       

       let r=1;
       let factorial=(num) => {
            for (let i = 1; i <=num; i++) { 
                r=r*i;
            }
            console.log(`${r} is factorial of ${num}`);
       } 
       factorial(5);

       let fibbonacci=(num)=>{
        let f1=0 ,f2=1;
        console.log(f1);
        console.log(f2);
        for (let i = 1; i <= num-2; i++) {
            let r=0;
            r=f1+f2;
            console.log(r);
            f1=f2;
            f2=r;  
        }
       }
       fibbonacci(10);

       //async, callback, 
            document.writeln("1");
            document.writeln("2");
            setTimeout(() => {
                document.writeln("asdfghjk");
            },4000)
            document.writeln("3");
            document.writeln("4");
            console.log("1");
            console.log("2");
            setTimeout(() => {
                console.log("asdfghj");
            },3000)
            console.log("3");
            console.log("4");





            const req= new XMLHttpRequest();
            req.addEventListener('readystatechange', () =>{
                console.log(req , req.readyState);
            } )
            req.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
            req.send();




        const req=new XMLHttpRequest();
        req.addEventListener('readystatechange',()=> {
            //console.log(requ , requ.readyState);
            if (req.readyState === 4) {
                console.log(req.responseText);   
                document.writeln(req.responseText);
            }
        });
        requ.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
        requ.send();

        const getTodos = () =>{    
            const requ=new XMLHttpRequest();
            requ.addEventListener('readystatechange',()=> {
                //console.log(requ , requ.readyState);
                if (requ.readyState === 4 && requ.status === 200) {
                    console.log(requ, requ.responseText);   
                    document.writeln(requ , requ.responseText);
                }
                else if(requ.readyState === 4){
                    console.log(`could not fetch the data`);
                    document.writeln(`could not fetch the data`);
                }
            });
            requ.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
            requ.send();
        }
        getTodos() ;
        

        const getTodos = (callback) =>{    
            const requ=new XMLHttpRequest();
            requ.addEventListener('readystatechange',()=> {
                //console.log(requ , requ.readyState);
                
                if (requ.readyState === 4 && requ.status === 200) {
                    const data=JSON.parse(requ.responseText)
                    callback(undefined,data);  
                }
                else if  (requ.readyState === 4){
                    callback('could not find data', undefined);
                }
            });
            requ.open('GET' , 'todos1.json');
            requ.send();
        }
        console.log(1);
        console.log(2);
        getTodos((err , data) =>{
            console.log(`callback fired`);
            if(err){
                console.log(err);
            }
            else{
                console.log(data);
            }    
        });
        console.log(3);
        console.log(4);


         const getTodos = (callback) =>{    
            const requ=new XMLHttpRequest();
            requ.addEventListener('readystatechange',()=> {
                //console.log(requ , requ.readyState);
                
                if (requ.readyState === 4 && requ.status === 200) {
                    const data=JSON.parse(requ.responseText)
                    callback(undefined,data);  
                }
                else if  (requ.readyState === 4){
                    callback('could not find data', undefined);
                }
            });
            requ.open('GET' , 'todos1.json');
            requ.send();
        }
        getTodos((err , data) =>{console.log(`callback fired`);if(err){console.log(err);}else{console.log(data); }    
        });



        //promises

        const a=()=>{

            return new Promise((resolve,reject)=>{
                resolve (' got the data');
                reject ('got the error');
            });     
        };
        a().then((data)=>{
            console.log(data);
            },
            (err)=>{
             console.log(err);  
            }
        );

        a().then(data =>{
            console.log(data);
        }).catch(err => {
            console.log(err);
        });

        // chaining promise
        const getTodos = (resource) =>{  

            return new Promise ((resolve,reject)=> {             
                const requ=new XMLHttpRequest();
                
                requ.addEventListener('readystatechange',()=> {
                    //console.log(requ , requ.readyState);
                    
                    if (requ.readyState === 4 && requ.status === 200) {
                        const data=JSON.parse(requ.responseText)
                        resolve(data); 
                    }
                    else if  (requ.readyState === 4){
                        reject('error getting the data')
                    }
                });
                requ.open('GET' , resource);
                requ.send();
            });
        }
        getTodos('todos1.json').then(data => {
            console.log('promise 1 resolved' ,data);
            return getTodos('todos2.json');
        }).then(data => {
            console.log('promise 2 resolved ' , data);
            return getTodos('todos3.json');
        }).then(data => {
            console.log('promise 3 resolved ' , data);
        }).catch(err => {
            console.log('promise rejected ' , err);
        });


        // fetch method
        fetch('todos1.json').then((response) => {
			console.log('resolved',response);
            return response.json();
		}).then(data =>{
            console.log(data);
        }).catch((err) => {
			console.log('rejected',err);
		});


        //fetch method with async and await
        const getTodos = async () => {
            const response= await fetch('todosa1.json');
            if (response.status !== 200) {
                throw new Error('cant fetch data');
            }
            const data = await response.json();
            return data;
        };
       
        getTodos()
        .then(data => {console.log('resolved: ' , data)})
        .catch(err => {console.log('rejected: ' , err)}); 
*/

       



        