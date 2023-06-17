var ImageDiv=document.getElementById("myimg");
var Submit_Btn=document.getElementById("submit");
var Container_Of_Spans=document.getElementById("alpha");
var Input_Num_Or_Word=document.getElementById("number_word");
var WordDiv=document.getElementById("word");
var Audio_Sound=document.getElementById("audio");
var ErrorDiv=document.getElementById("error");
var PictureDiv=document.getElementById("pict");
var ListSpans=document.getElementsByTagName("span");
// alphpa.style.cssText="background-color: #00f ; color: #fff";
var ar=[1,2,3,4,5,6,7];
var Array_Alphapet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  //var i=0;

// var words=["Apple","Book","Dog","Snake","Zebra","Yak","Tiger","Car","Wheel","Rabbit","Lion","Egge","Mango","Quilt","Parrot","Nest","Vegetables","Onion","Fan","Kite","Insects","Jacket","Hen","Goat","Umberalla","Xray"];
var Array_Words_1,Array_Words_2,Array_Words_3,Array_Words_4,Array_Words_5,Array_All_Words;
Array_Words_1=["Apple.jpg","Green.png","Pink.png","House.jpg","Blue.png","Blue.png","Black.png","Brown.jpg","Moon.jpg","Mauve.png","Maroon.png","Night.jpg","Ant.jpg","Red.jpg","Alligator.jpg","Dove.jpg","Zoo.jpg","Zip.jpg","Sun.jpg"]
Array_Words_2=["Yellow.jpg","Yoyo.jpg","Wolf.jpg","Well.jpg","Xeron.jpg","Vine.jpg","WaterMelon.jpg","Table.jpg","Van.jpg","Unicorn.jpg","Umpire.jpg","Teapot.jpg","Tree.jpg","Sunflower.jpg","Spoon.jpg","Squirrel.jpg","Queen.jpg"]
Array_Words_3=["Rocket.jpg","Quail.jpg","Rainbow.jpg","Ostritch.jpg","Pig.jpg","Pigeon.jpg","Needle.jpg","Ox.jpg","Nose.jpg","Kangroo.jpg","Monkey.jpg","Mug.jpg","Lamb.jpg","Lamp.jpg","Key.jpg","Jug.jpg","Igloo.jpg","Grapes.jpg"]
Array_Words_4=["Horse.jpg","Elephant.jpg","Frog.jpg","Carrot.jpg","Book.jpg","Dog.jpg","Snake.jpg","Girl.jpg","Zebra.jpg","Yak.jpg","Tiger.jpg","Car.jpg","Wheel.jpg","Rabbit.jpg","Lion.jpg","Egg.jpg","Mango.jpg","Quilt.jpg"]
Array_Words_5=["Parrot.jpg","Nest.jpg","Umberalla.jpg","Vegetables.jpg","Onion.jpg","Fan.jpg","Cat.jpg","Donkey.jpg","Banana.jpg","Eagle.jpg","Fat.jpg","Kite.jpg","Insects.jpg","Jacket.jpg","Hen.jpg","Goat.jpg","Umberalla.jpg","Xray.jpg"]
Array_All_Words=[...Array_Words_1,...Array_Words_2,...Array_Words_3,...Array_Words_4,...Array_Words_5];
console.log("Number Of Words are : "+Array_All_Words.length);

  function Object_Letter(Event_Target,Event_Type,Event_Time) {
    this.Event_Target=Event_Target;
    this.Event_Type=Event_Type;
    this.Event_Time=Event_Time;
  }

  function Check_Word_Exists(Array_Words,Word_val){
    var Word_From_Array_Words="",Part_One_Before_Dot="",Part_Two_After_Dot="",flag=false,ContentOfWordBySourc=""
    Word_From_Array_Words=Word_From_Array_Words.split('.')
    // Part_Two_After_Dot=Word_From_Array_Words[1]
    // const result = Array_Words.findIndex(item => Word_val.toUpperCase() === item[0].toUpperCase());
    for(var Index=0;Index<Array_Words.length;Index++){
    Word_From_Array_Words=Array_Words[Index]
    Word_From_Array_Words=Word_From_Array_Words.split('.')
    Part_One_Before_Dot=Word_From_Array_Words[0]
    if( Word_val.toUpperCase() === Part_One_Before_Dot.toUpperCase()){
      // console.log(Part_One_Before_Dot)
      ContentOfWordBySourc=Array_Words[Index]
      break
    }else{
      ContentOfWordBySourc="NotExists"
    }
    }
    return ContentOfWordBySourc
  }
  
/*   function FileExistsOrNo(Source)
  {
      // var myfile = new File([""], Source);

      // if (!myfile.exists) {
      //         alert(myfile.name + " could not be found!");
      // }
      // else
      // {
      //     alert("file exists!");
      // }

  } */

  function Display_Word_In_Dom(WordContent){
    var Check_Flag="",Part_Two_After_Dot="",AcctuallyWord="",AudioSource=""
    Check_Flag=WordContent.split('.')
    Part_Two_After_Dot=Check_Flag[1]
    //New Word
    AcctuallyWord=Check_Flag[0].replace(Check_Flag[0][0],Check_Flag[0][0].toUpperCase())
    console.log(AcctuallyWord)
    // console.log(Part_Two_After_Dot)
    Audio_Sound.src=AudioSource
    AudioSource="Records"+"/"+AcctuallyWord+'.'+'m4a';
    // console.log(AudioSource.exists())
    // FileExistsOrNo(AudioSource)
    // Audio_Sound.src=AudioSource
    Source_Ready_To_Display="Project_Images"+"/"+AcctuallyWord+'.'+Part_Two_After_Dot;
    var _InputPopOver="<button type='button' value='"+AcctuallyWord+"'type='button' class='btn btn-primary PopOver btn-block' data-container='#word' data-toggle='popover' data-placement='top' data-content='Translation will be out soon of : a / an &quot; " +AcctuallyWord + " &quot; word .'>"+AcctuallyWord+"</button"
    WordDiv.innerHTML+=_InputPopOver
    WordDiv.style.display='block'
    alpha.innerHTML="";
    alpha.style.display='none'
    displayPhoto(Source_Ready_To_Display)
  }
  ////////////////////////////////////////
  const readFile = (filePath) => {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest()
      xhr.onerror = (error) => {
        reject(error)
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          resolve(xhr.response)
        }
      }
      xhr.ontimeout = function () {
        reject('timeout')
      }
      xhr.open('GET', filePath)
      xhr.send()
    })
  }
  
  async function checker () {
      const code = await readFile(jsFilePath)
      console.log(code)
  }
////////////////////////////////////////

  function displayPhoto(source) {
    ImageDiv.style.display='block'
    // readFile(source)
    // try {
    //   ImageDiv.attr(source)
    //   // ImageDiv.src=source;
    // } catch (error) {
    //   console.log(error)
    // }
    ImageDiv.src=source;
    
  }
   
  function Arrange_Indices_For_Array_Rand(Array_Non_Arrang) {
    for(var Ind=0;Ind<Array_Non_Arrang.length;Ind++){
      var Empt=Array_Non_Arrang[Ind]
      for(var Ind2=0;Ind2<Array_Non_Arrang.length;Ind2++){
        if(Array_Non_Arrang[Ind2]>Array_Non_Arrang[Ind2+1]){

          Empt=Array_Non_Arrang[Ind2]
          Array_Non_Arrang[Ind2]=Array_Non_Arrang[Ind2+1]
          Array_Non_Arrang[Ind2+1]=Empt

        }

      }
    }
    Create_SpansLetters(Array_Non_Arrang);
  }



  //Is Very Important ...........
  //Function  getDomIndex (target) to select the index of span or the index of "target" to set it an active color an the siblings be not active
  function Get_Span_Index (target) {
   return [].slice.call(target.parentNode.children).indexOf(target)
  }
  function OtherWise(){
    ErrorDiv.style.display='block';
    alpha.innerHTML="";
    alpha.style.display='none'
    ImageDiv.src="Project_Images"+"/"+"wellcom.jpg";
    Audio_Sound.src="Records"+"/"+"Hello.m4a"
  }
  function Rand_Word_Func() {
    //return a number from 1 to 90
    var RandomNumber=Math.floor(Math.random()*90);
    return RandomNumber;
  }
    
  function Rand_Numb_Func() {
    //return a number from 1 to 26
    var RandomNumber=Math.floor(Math.random()*26);
    return RandomNumber;
  }

window.addEventListener("load",function(e) {

    var New_Object=new Object_Letter();
    //p1.Event_Target=submt.value;
    New_Object.Event_Time=new Date();
    New_Object.Event_Type=e.type;
    var con=New_Object.Event_Time+"++"+New_Object.Event_Type;
    //localStorage.setItem('submit',con);
    if(localStorage.getItem("TheLoading")===null) {
      localStorage.setItem("TheLoading",con);
    }
    else {
    
      var Array_of_objects= new Array(localStorage.getItem("TheLoading"));
      Array_of_objects.push(con);
      localStorage.setItem("TheLoading",Array_of_objects);
    }

});


  window.addEventListener("unload",function(e) {

    var New_Object_1=new Object_Letter();
    //p1.Event_Target=submt.value;
    New_Object_1.Event_Time=new Date();
    New_Object_1.Event_Type=e.type;
    var con=New_Object_1.Event_Time+"++"+New_Object_1.Event_Type;
    //localStorage.setItem('submit',con);
    if(localStorage.getItem("The UnLoading")===null) {
      localStorage.setItem("The UnLoading",con);
    }
    else {
    
      var a= new Array(localStorage.getItem("The UnLoading"));
      a.push(con);
      localStorage.setItem("The UnLoading",a);
    }

  });
//
Submit_Btn.addEventListener("click",function(e){
                  
    //chek the entry number is valid or no.
    WordDiv.style.display="none";
    //  audio.style.display='block';
    ErrorDiv.style.display='none';
    WordDiv.innerHTML="";
    Audio_Sound.src="Records"+"/"+"Hello.m4a"                     
    var Val_Of_Num_Letters_or_Word=Input_Num_Or_Word.value,Check_Flag="",Source_Ready_To_Display="",AcctuallyWord=""
    
    var Result_Is_Input_Word=isNaN(Val_Of_Num_Letters_or_Word)
    if(Result_Is_Input_Word==true) {
      ErrorDiv.innerHTML="";
      Check_Flag=Check_Word_Exists(Array_All_Words,Val_Of_Num_Letters_or_Word)
      if(Check_Flag!=="NotExists"){
        Display_Word_In_Dom(Check_Flag)
      }else{
        ErrorDiv.innerHTML="This Word or Letter is Not Exists .";
        ErrorDiv.style.display='block';
        alpha.innerHTML="";
        alpha.style.display='none'
        ImageDiv.src="Project_Images"+"/"+"wellcom.jpg";
        Audio_Sound.src="Records"+"/"+"Hello.m4a"
      }

    }
    if(Val_Of_Num_Letters_or_Word=="") {
      ErrorDiv.innerHTML="";
      ErrorDiv.innerHTML="You Must Type A Word Or Number .";
      OtherWise()
    }
    if(Val_Of_Num_Letters_or_Word=="0"||Val_Of_Num_Letters_or_Word<0) {
      ErrorDiv.innerHTML="";
      ErrorDiv.innerHTML="the number is not valid.";
      OtherWise()
      // console.log(typeof(nnn))
    }
    
    if(Val_Of_Num_Letters_or_Word>26) {
      ErrorDiv.innerHTML="";

      ErrorDiv.innerHTML="the number is out of range, the range : from 1 to 26 .";
      ErrorDiv.style.display='block';
      OtherWise()
      // console.log(typeof(nnn))
    }
    
    if(Val_Of_Num_Letters_or_Word!==0 && Val_Of_Num_Letters_or_Word>0 && Val_Of_Num_Letters_or_Word<27) { 
      ErrorDiv.innerHTML="";
      alpha.innerHTML="";

      Container_Of_Spans.style.display='block';
      ImageDiv.style.display='block';
      ImageDiv.src="Project_Images"+"/"+"wellcom.jpg";
      // console.log(typeof(nnn))
      var New_Object_2=new Object_Letter();
      
      New_Object_2.Event_Target=Submit_Btn.value;
      New_Object_2.Event_Time=new Date();
      New_Object_2.Event_Type=e.type;
      var con=New_Object_2.Event_Target+"++"+New_Object_2.Event_Time+"++"+New_Object_2.Event_Type;
      //localStorage.setItem('submit',con);
      if(localStorage.getItem("submit")===null) {
        localStorage.setItem("submit",con);
      }
      else {
        // error.style.display='none';
        var a= new Array(localStorage.getItem("submit"));
        a.push(con);
        localStorage.setItem("submit",a);
      }
      GenerateArray_RoundNumbers(Val_Of_Num_Letters_or_Word);
    }                   
});

//////////////////////
  function GenerateArray_RoundNumbers(randnum) {        
      //Generate an array consists of randnum numbers (may b 5 numbers ) without reputition,
      // only the every number in an array not has alike number  in the array
      //يعنى مثلا مبعوث ليا رقم 5 يبقى هعمل مصفوفة مكونة من 5 أرقام طبعا من 0 الى 26 بشرط مفيش رقم متكرر ف المصفوفة و هكذا
      var Array_For_Random_Numbers= [];
      // I set the flag with flase at the beginning to enter the while loop
      var flage=false;
      var Random_Number=0;
      //the best algorithm for avoid repition.
      for(var i1=0;i1<randnum;i1++) {
              if(i1===0){
                Random_Number=Rand_Numb_Func();
                //var old=NR;
                // set to the first Index value equal 0
                Array_For_Random_Numbers[i1]=Random_Number;
              }
              if(i1!==0){
                while(flage===false) {
                    Random_Number=Rand_Numb_Func();
                  //if return true // means the number exsits from before
                  if(Array_For_Random_Numbers.includes(Random_Number)) {
                    Random_Number=Rand_Numb_Func();
                    
                  }
                  //if return false // means the number not exsits from before
                  if(!(Array_For_Random_Numbers.includes(Random_Number))) {
                    flage=true;
                    Array_For_Random_Numbers[i1]=Random_Number;
                  }
                  
                  
                }
                // After finish the while loop return to set the flage with flase value (reset the flage value)
                flage=false;
              }
      }
      
      Arrange_Indices_For_Array_Rand(Array_For_Random_Numbers)
      // Create_SpansLetters(Array_For_Random_Numbers);
  }


  function Create_SpansLetters(arr) {
      //  alpha.innerHTML="";
      for(var i=0;i<arr.length;i++) {
        var paragrap=document.createElement("span");
        var text=document.createTextNode(Array_Alphapet[arr[i]]);
        paragrap.appendChild(text);
        // paragrap.style.cssText="background-color: #00f ; color: #fff";
        Container_Of_Spans.appendChild(paragrap); 
      }
     ShowPict_ByClickInSpan();
  }


  function ShowPict_ByClickInSpan() {
      
      for(var j=0;j<ListSpans.length;j++) {
        
            ListSpans[j].addEventListener("click",function(e) {
                  var indexSpanSelected=Get_Span_Index(this);
                  //display span as html by its index
                  console.log(ListSpans[indexSpanSelected])
                  //display the text inside the span tag 
                  //you can use 
                  //: 1- (listspan[indexSpanSelected].textContent)
                  //: 2- (listspan[indexSpanSelected].innerText)
                  console.log(ListSpans[indexSpanSelected].innerText)
                  //display the index selected span
                  console.log("Index of selected letter is : "+indexSpanSelected)
                  for(var Count1=0;Count1<ListSpans.length;Count1++) {
                    if(indexSpanSelected == Count1){
                      // this.classList.add("active");
                      ListSpans[indexSpanSelected].classList.add("active");
                    }
                    else{
                      ListSpans[Count1].classList.remove("active");
                    }
                  } 
                  var p1=new Object_Letter();
                  p1.Event_Target=e.target.textContent;
                  var letter=p1.Event_Target;
                  // var letter=e.target.textContent; //it's the best if you don't use an object ...
                  p1.Event_Time=new Date();
                  p1.Event_Type=e.type;
                  var con=p1.Event_Target+"++"+p1.Event_Time+"++"+p1.Event_Type;
                  // localStorage.setItem('LeterClick',con);
                  if(localStorage.getItem("span_Letter")===null){
                    localStorage.setItem("span_Letter",con);
                  }
                  else{
                    var a= new Array(localStorage.getItem("span_Letter"));
                    a.push(con);
                    localStorage.setItem("span_Letter",a);
                  }
                  WordDiv.innerHTML="";

                  var flage=false;
                  Random_Number="", Word_From_Array_Words="" , Source_Picture_Audio="" , Part_One_Before_Dot="" , Part_Two_After_Dot="";
                  while(flage===false) {
                  //set an number (Index) from array words from 0 to 89 
                  Random_Number=Rand_Word_Func();
                  Word_From_Array_Words=Array_All_Words[Random_Number];
                  Word_From_Array_Words=Word_From_Array_Words.split('.');
                  Part_One_Before_Dot=Word_From_Array_Words[0];
                  Part_Two_After_Dot=Word_From_Array_Words[1]
                  //Part_Two_After_Dot is a word 
                  //Part_Two_After_Dot is an exetintion (jpg or png , etc ......)
                  //  Part_One_Before_Dot is equal the first portion
                  if(Part_One_Before_Dot[0]===letter) {

                    Source_Picture_Audio=Part_One_Before_Dot;
                    flage=true;
                    } 
                  }
                  flage=false;
                  WordDiv.style.display='Block';
                  // to diplay a text over the word it's called "PopOver"
                  var _InputPopOver="<button type='button' value='"+Part_One_Before_Dot+"'type='button' class='btn btn-primary PopOver btn-block' data-container='#word' data-toggle='popover' data-placement='top' data-content='Translation will be out soon of : a / an &quot; " +Part_One_Before_Dot + " &quot; word .'>"+Part_One_Before_Dot+"</button"
                  WordDiv.innerHTML+=_InputPopOver
                  console.log( WordDiv.getAttributeNS("id","word"))
                  var Source_Ready_To_Display="Project_Images"+"/"+Source_Picture_Audio+'.'+Part_Two_After_Dot;
                  Audio_Sound.src="Records/"+Source_Picture_Audio+'.'+'m4a';
                  displayPhoto(Source_Ready_To_Display);
              });
        }
    
  }



  
  setInterval(function(){localStorage.clear();},5000);