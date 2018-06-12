

class Reel
{
	
	//Thread thread;
	//FruitMachine parent;

    constructor(i)
    {
		this.randNos= [4,2,1,3,1,2,5,6,3,1,4,2];			
		this.frameX =  [];

		this.reelPos = 1;
		this.k;
		this.l;
		this.reelNo;
		this.delay

		this.a;
        this.reelNo = i;  
        //this.parent = parent;
        this.getImages();
    }

    getImages()
    {
        //MediaTracker myTracker = new MediaTracker(parent);

        for (let i=0;i<12;i++)
        {
			this.frameX.push(imgArr[floor(random(0,5.99))]);

			image(this.frameX[i], 500,100+i*10);
			
		}
		
	}

    spin()
    {
		//thread = new Thread(this);
		//thread.start();
		this.run();
	}

	run() {

        this.a =random(1);
        this.k= round(this.a*10);

        this.delay=50;

		for (this.l= this.k-9; this.l < this.k+1; this.l++) {
            if (this.l >0)
            {
	            this.reelPos = this.l;
	        }
	        else
	        {
	            this.reelPos= 10 + this.l;
			}
			
			//createP(this.reelPos + 'xxx' + this.reelNo); //,50, this.reelNo);

	        displayReels();

	        try
	        {
	           //Thread.sleep(delay);
	          // delay += 20;
	        }
	        catch (e)
	        {
	        }
		}
	    reelStopped();
	}

	previousImage()
	{
	    return this.frameX[this.reelPos-1];
	}
    currentImage()
    {
    	return this.frameX[this.reelPos];
	}
	nextImage()
	{
	    return this.frameX[this.reelPos+1];
	}
	stop()
	{
	    //thread = null;
	}
	nudge()
	{
	    if (this.reelPos < 10)
	    {
	        this.reelPos++;
	    }
	    else
	    {
	        this.reelPos =1;
	    }
	}
}



	
		function holdButtonAction()
		{
		   if (holdButton[reelNumber].html() == 'Hold')
		   {
				holdButton[reelNumber].value(true);
				holdButton[reelNumber].html('Held');
		   }
		   else if (holdButton[reelNumber].html() == 'Held')
				
				{
					holdButton[reelNumber].value(false);
					holdButton[reelNumber].html('Hold');
				}
				
		   
		   		else if (holdButton[reelNumber].html() == 'Nudge')
		   				
				{
					holdButton[reelNumber].value(true);
					holdButton[reelNumber].html('Hold');
				}
				else
				{
					holdButton[reelNumber].value(false);
				}
		   
		}
	
		/*isHeld()
		{
			return held;
		}*/
	
		function holdButtonReset(reelNumber)
		{
			holdButton[reelNumber].value(false);
		}
	
		
	//}
	
	function doubleButtonAction(){
		action(doubleButton.html());
	}

	function playButtonAction(){
		action(playButton.html());
	}
	
	
	function gambleButtonAction() //evt, whichAction)
		{
			action(gambleButton.html());
				gamble= !gamble;

		
		}
	
	
	
	class FlashMessage //implements Runnable
	{
		//FruitMachine parent;
		
		//Thread thread = null;
	
		constructor()
		{
			this.hide = false;
			this.run = true;
			this.flashPaint = false;
			//this.parent = parent;
		}
	
		show()
		{
			this.run = true;
			/*if (thread == null)
			{
				thread = new Thread(this);
				thread.start();
			}*/
		}
	
		run()
		{
			while (true)
			{
				this.hide = !this.hide;
				this.flashPaint= true;
				paint();
	
				try
				{
					 //Thread.sleep(500);
				}
				catch (e)
				{
				}
			}
		}
	
		hide()
		{
			return hide;
		}
	
		running()
		{
			return this.run;
		}
	
		paint()
		{
			return this.flashPaint;
		}
	
		paintOff()
		{
			return this.flashPaint= false;
		}
	
		stop()
		{
			this.run = false;
			/*if (thread != null)
			{
	
				thread.stop();
				thread = null;
			}*/
	
		}
	}
	
	class ObservableWin 
	{
			
		//FruitMachine parent;
	
		constructor()
		{
			this.value=0;
		}
	
		setValue(newValue)
		{
			if (this.value != this.newValue)
			{
				this.value = this.newValue;
				//setChanged();
				//notifyObservers();
			}
		}
		getValue()
		{
			return this.value;
		}
	}
	
	class WinLabel
	{
		
		constructor(win)
		{
			this.winValue = win;
			//winValue.addObserver(this);
			//this.wordFont = new Font("TimesRoman", Font.BOLD, 24);
			//setFont(wordFont);
			//setAlignment(Label.CENTER);
			//setBackground(Color.lightGray);
			//setForeground(Color.blue);
			//setText("                  ");
		}
	
		update(obs, arg)
		{
			if (this.winValue.getValue() > 0)
			{
				//setBackground(Color.red);
				text('Win!',100,100);
			}
			else
			{
				//setBackground(Color.lightGray);
				//setText(" ");
			}
		}
	}
	
	class TimeDialog
	{
		
	
		constructor()
		{
			
			//this.fruit =fruit;
	
			//dialogLayout = new FlowLayout(FlowLayout.CENTER,20,10);
			//setLayout(dialogLayout);
			//setTitle("End of game");
			//messageLabel = new Label
			text("Do you want to play again?", 20, 155);
			//this.winningsLabel = new Label("   ");
			//add (winningsLabel);
			//add(messageLabel);
			/*this.endButton = new Button({x: 0,
				y: 165,
				label: "Yes",
				onClick: function() {
					text("", this.x, this.y);}});
			this.newButton = new Button ({x: 50,
				y: 165,
				label: "No",
				onClick: function() {
					text("", this.x, this.y);}});*/
			//add(newButton);
			//add(endButton);
			//this.resize(200,150);
		}
	
		show()
		{
			//this.money = new Integer(fruit.getMoney());
			//this.message = new (
			text("You finished with " +money.toString(),20,155);
			//this.winningsLabel.setText(message);
			//show();
	
		}
	
	
		action(event, whichAction)
		{
			if (event.target instanceof Button)
			{
				this.buttonLabel =  whichAction;
	
				if (this.buttonLabel == "No")
				{
					this.hide();
					//fruit.destroy();
				}
				if (this.buttonLabel=="Yes")
				{
					//fruit.newGame();
					//#this.dispose();
				}
	
			}
			return true;
		}
		
	}
	


	var imgArr =[];
	var reel=[];	
	let flash;
	let holdButton=[]; // = new HoldButton[3];
	
    let gambleButton; //= null;
	let playButton; 
    let doubleButton;
    let winPanel;// = new Panel();
    let timeDialog;
    let winningsLabel;
    let winAmount;

   	let startTime=0;
	let timeToGo;

    let label;
    let msgString = "";
	let holdOpt = false;
	let nudgeOpt = false;
	let gamble = false;
	let gambleChosen = false;
	let timeOut = false;
	let reelPaint = false;

	let reelNumber;
	let money =20;
	let winnings =0;
	let stake = 1;
	let reelSpinning = 0;
	let nudgeNo = 0;


	function preload(){
		for (let i=1;i<7;i++) {
			imgArr.push(loadImage('x' + i + '.gif'));
		}
		
	}



function setup()
{
	   var myCanvas= createCanvas(360,400);
	   myCanvas.parent('myContainer');
		
	  /* for (let i=0;i<6;i++) {
		image(imgArr[i],20+i*50,50);
	}*/

	   
	   flash = new FlashMessage();

	   //setLayout(null);

       for (let i=0; i <3; i++)
	   {
	        reel.push(new Reel(i));
			holdButton.push(createButton('Hold'));
			holdButton[i].position(100+65*i, 240);
			reelNumber=i;
			holdButton[i].value(false);
			holdButton[i].html('   ');
			holdButton[i].mousePressed(holdButtonAction);

			//	label: "Hold",
			//	onClick: function() {
			//		text("Held", this.x, this.y);}
			//	})
	        //add(holdButton[i]);
	        //holdButton[i].reshape(insets().left + 80*i,
	        //    insets().top +5, 70, 50);
	   }

	    gambleButton= createButton('Gamble'); 
	    gambleButton.position(100,270);
		gambleButton.mousePressed(gambleButtonAction);
      // add(gambleButton);
       //gambleButton.reshape(insets().left,insets().top + 65,70,50);

       //add(doubleButton);
       //doubleButton.reshape(insets().left + 80,insets().top + 65,70,50);
	   doubleButton= createButton('Double'); 
		doubleButton.position(165,270);
		doubleButton.mousePressed(doubleButtonAction);
	   //add(playButton);
	   //playButton.reshape(insets().left + 160,insets().top + 65,70,50);
	   playButton= createButton('Play'); 
		playButton.position(230,270);
		playButton.mousePressed(playButtonAction);

       timeDialog = new TimeDialog(this);

       winAmount = new ObservableWin();
       winningsLabel= new WinLabel(winAmount);
       winAmount.setValue(0);
       //add(winPanel);
	   //winPanel.reshape(insets().left -65, insets().top - 115,70,60);
      // winPanel.add(winningsLabel);
      // winPanel.show();

	   //paint();
	   flash.show();
       //startTime = System.currentTimeMillis();

	   run();
}

   // public Insets insets()
   // {
   //     return new Insets(230,70,50,50);
   // }

/*	public void start() {
		if (fruitThread == null)
		{
		    fruitThread = new Thread(this);
		    fruitThread.start();
		}
	}*/

	function run() {

        spinReels();

        waitForReel();

		checkWin();
		if (winnings > 0 )
		{
			checkGamble();
		}

		displayReels();

		checkHoldAvailable();

		checkNudgeAvailable();

    }

	function spinReels()
	{
	    reelSpinning = 3;

		for (let i=0; i<3; i++) {
			if (holdButton[i].value() == true) //.isHeld())
		   {
		        reelSpinning--;
		        holdButton[i].value(false);
		   }
		   else
		   {
		   
		        reel[i].spin();
		   }
		}
	}

	function waitForReel()
	{
        while (reelSpinning > 0) {
            try
            {
                 //wait();
            }
            catch (e)
            {
            }
        }
	}

	function reelStopped()
	{
	    reelSpinning--;
	    //notify();
	}

	function checkHoldAvailable()
	{
	    let a = random(0,1);

		if (a<0.3)
		{
		    holdOpt =true;
		    doubleButton.value("");
		    label = "Hold";
		    for (let i=0; i<3; i++)
		    {
				holdButton[i].html(label);
				holdButton[i].value(true);

		    }
		}
		else
		{
		    holdOpt=false;
		    doubleButton.value("Double");
	        for (let i=0; i<3; i++)
		    {
				holdButton[i].html("    ");
				holdButton[i].value(false);

		    }
	    }
		return holdOpt;
	}

	function holdOn()
	{
	    return holdOpt;
	}

    function checkNudgeAvailable()
	{
	    var a = random(1);

		if ((a>0.2 & a < 0.6) & !holdOpt)
		{

		    nudgeOpt =true;

		    nudgeNo = round(a*10);
		    label = "Nudge";
		    msgString = "You can nudge " + (nudgeNo-1) + " times";
		    for (let i=0; i<3; i++)
		    {
		        holdButton[i].html(label);
		        holdButton[i].value(true);
		    }
		    playButton.html("Collect");
		    doubleButton.html("");
		}
		else
		{
		    if (!holdOpt) doubleButton.html("Double");
		}
		return nudgeOpt;
	}
	function nudgeOn()
	{
	    return nudgeOpt;
	}
	function nudge(i)
	{
	    let reelNo = i;
	    nudgeNo--;

	    if (nudgeNo > 0)
	    {
	        reel[i].nudge();
	        displayReels();
	        if (nudgeNo > 1)
	        {
	            msgString = "You can nudge " + (nudgeNo-1) + " times";
	        }
	        else
	        {
	            msgString = "";
	            label="";
	        }
	    }
	    else
	    {
	        nudgeOpt =false;
	        msgString = "";
	    }
	}

	function checkWin() {
		winnings = 0;
		if (reel[0].currentImage() == reel[1].currentImage())
		{
			if (reel[1].currentImage() ==reel[2].currentImage())
			{
				winnings=5 * stake;
			}
			else
			{
				winnings =2 * stake;
			}
		}

		if ((reel[0].currentImage() == loadImage('x3.gif')) |
			(reel[0].currentImage() == loadImage('x4.gif')))
				winnings = winnings*2;
		if ((reel[0].currentImage() == loadImage('x5.gif')) |
			(reel[0].currentImage() == loadImage('x6.gif')))
				winnings = winnings*4;

		money = money+ winnings-stake;
		winAmount.setValue(winnings);
		if (winnings > 0)
		{
		    msgString = "You have won �"+winnings;
		}
	}

	function checkGamble()
	{
       	let a = random(1);
		if (a<0.5)
		{
			gamble= true;
			gambleButton.html("Gamble");
        }
		else
		{
		    gamble =false;
		    gambleButton.html("");
		}
	}

	function gambleOn()
	{
	    return gamble;
	}

	function gambler() {

		a = random(1);
		if (a>0.5) {
			money = money+winnings;
		    winnings = winnings* 2;
		    msgString = "You have won �"+winnings;
		}
		else {
	        money = money -winnings;
		    winnings = 0;
		    msgString = " Bad luck. You lost";
		}
        winAmount.setValue(winnings);
		paint();
	}

    function displayReels()
    {
		
        reelPaint=true;
        paint();
    }

   function newGame()
    {
	    startTime = millis();

	    timeOut = false;
	    money =20;
	    winnings =0;
	    stake = 1;

	    restart();
	}

    function restart()
    {
        holdOpt=false;
	    gambleChosen = false;
	    gamble =false;
	    nudgeOpt = false;
	    timeOut = false;

	    msgString = "";
	    label = "";

        //fruitThread = new Thread(this);
		//fruitThread.start();
		run();
	}


    function update()
    {
        paint();
    }

    function getMoney()
    {
        return money;
    }

	function paint()
	{
        timeToGo = 500000- millis() -startTime;
        if (timeToGo < 0 | money < 1)
        {
            stop();
        }

        flash.show();
        //wordFont = new Font("TimesRoman", Font.BOLD, 16);
		//g.setFont(wordFont);

        if (!flash.paint() & (reelSpinning <1))
        {
			
			 fill(100,0,0);
			 rect(0,0,360,400);
			// rect(85,50,200,180);
			// rect(85,110,200,60);
			 //g.setColor(Color.lightGray);
	        //g.fill3DRect(0,0,360,400,true);
	        //g.fill3DRect(85,50,200,180,true);
	        //g.fill3DRect(85,110,200,60,false);
	        //wordFont2 = new Font("TimesRoman", Font.BOLD, 24);
		   // g.setColor(Color.yellow);

			//g.setFont(wordFont2);
			
			fill(255);
			textSize(12);
			textFont('Helvetica');	
		   text("Virtual Vegas", 110,30);

           // g.setFont(wordFont);
			//g.setColor(Color.blue);
			text("You have £"+money+ ".      Stake is £" + stake,20,395);

		    reelPaint= true;
	    }

        if ((reelSpinning < 1) & (!timeOut))
		{
            //g.setColor(Color.lightGray);
			//g.fill3DRect(0,230,360,145,true);
			//fill(100);
			//rect(0,230,360,145);

		    //var color;

		    //if (flash.hide) color = Color.lightGray;
            //else color= Color.red;

            //g.setColor(color);
			//g.drawString(msgString,20,365);
			fill(255);
			textSize(12);
			textFont('Helvetica');
			text(msgString,20,365);

            //wordFont2 = new Font("TimesRoman", Font.BOLD, 24);
		    //g.setFont(wordFont2);

		    if (flash.hide)
		    {
		        //g.setColor(Color.yellow);
		    }

		    createP("Virtual Vegas", 110,30);

			//
			fill(0,255,0);
			rect(320,90,20,100);
			//g.setColor(Color.green);
            //g.fill3DRect(320,90 ,20, 100,true);
			fill(255,0,0);
			rect(320,90,20,10);
			//g.setColor(Color.red);
            //g.fill3DRect(320,90,20,
               // (let) (((System.currentTimeMillis())-startTime)/1000),true);


		   	for (let i=0; i < 3; i++)
			{
			    if (flash.hide)
			    {
			        holdButton[i].html("");
			        gambleButton.html("");
			    }
			    else
			    {
			        holdButton[i].html(label);
			        if (gamble) gambleButton.html("Gamble");
			    }
			    if (holdButton[i].value() & holdOpt)
			    {
			        holdButton[i].html("Held");
			    }
			}
	    }

		if (reelPaint)
	    {
			text('reelpaint'+second(),10,300)
	        let x = 60;
		    let y = 60;
	        for (let j=0; j< 3; j++)
		    {
				 image(reel[j].previousImage(), j*x +100, 53);
		    	image(reel[j].currentImage(), j*x +100, y+53);
				image(reel[j].nextImage(), j*x +100, 2*y +53);
		    }
		    reelPaint = false;
		}

	    flash.paintOff();
	}

	function stop()
	{
	    flash.stop();
        timeOut= true;

        //if (fruitThread != null)
        //{
            checkRecordWin(new Integer(money));
            //fruitThread= null;
        //}
    }

    function checkRecordWin(money)
    {
        if (money.intValue() > 10)
        {
            let moneyString = new let(money.toString());
            record = new FrameRecord(moneyString , this);
            record.show();
        }
    }


	function action(whatAction)
	{
	    //if (evt.target instanceof Button)
	    {
	        let buttonLabel = whatAction;

	        if (buttonLabel == "Play")
	        {
	            restart();
	        }

			else if (buttonLabel == "Collect")
			{
			    playButton.html("Play");
			    nudgeOpt= false;
			    label = "";
			    msgString ="";

			    for (let i=0; i < 3; i++)
			    {
					reelNumber=i;
					holdButtonAction();
			    }
			    checkWin();

			    paint();
			}

			else if (buttonLabel == "Double")
			{
			    stake *=2;
			    paint();
			}
	    }
		return true;
	}
	//{{DECLARE_CONTROLS
	//}}




















