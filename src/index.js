
var mainViewModel= new MainViewModel();
var mainView= new MainView();
var einfacherRechner= new EinfacherRechner();
var numberComposer= new NumberComposer();
mainViewModel.einfacherRechner= einfacherRechner;
mainViewModel.numberComposer= numberComposer;
mainViewModel.mainView= mainView;

mainView.display= document.getElementById( "display");
mainView.key0= document.getElementById( "key-0");
mainView.key1= document.getElementById( "key-1");
mainView.key2= document.getElementById( "key-2");
mainView.key3= document.getElementById( "key-3");
mainView.key4= document.getElementById( "key-4");
mainView.key5= document.getElementById( "key-5");
mainView.key6= document.getElementById( "key-6");
mainView.key7= document.getElementById( "key-7");
mainView.key8= document.getElementById( "key-8");
mainView.key9= document.getElementById( "key-9");
mainView.keyDivide= document.getElementById( "key-divide");
mainView.keyMultiply= document.getElementById( "key-multiply");
mainView.keySubstract= document.getElementById( "key-substract");
mainView.keyAdd= document.getElementById( "key-add");
mainView.keyPeriod= document.getElementById( "key-period");
mainView.keyEqual= document.getElementById( "key-equal");

mainView.key0.onclick= function() {
    mainViewModel.key0Pressed();
}

mainView.key1.onclick= function() {
    mainViewModel.key1Pressed();
}

mainView.key2.onclick= function() {
    mainViewModel.key2Pressed();
}

mainView.key3.onclick= function() {
    mainViewModel.key3Pressed();
}

mainView.key4.onclick= function() {
    mainViewModel.key4Pressed();
}

mainView.key5.onclick= function() {
    mainViewModel.key5Pressed();
}

mainView.key6.onclick= function() {
    mainViewModel.key6Pressed();
}

mainView.key7.onclick= function() {
    mainViewModel.key7Pressed();
}

mainView.key8.onclick= function() {
    mainViewModel.key8Pressed();
}

mainView.key9.onclick= function() {
    mainViewModel.key9Pressed();
}

mainView.keyDivide.onclick= function() {
    mainViewModel.keyDividePressed();
}

mainView.keyMultiply.onclick= function() {
    mainViewModel.keyMultiplyPressed();
}

mainView.keySubstract.onclick= function() {
    mainViewModel.keySubstractPressed();
}
mainView.keyAdd.onclick= function() {
    mainViewModel.keyAddPressed();
}
mainView.keyPeriod.onclick= function() {
    mainViewModel.keyPeriodPressed();
}
mainView.keyEqual.onclick= function() {
    mainViewModel.keyCalculatePressed();
}

