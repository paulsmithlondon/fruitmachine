



	var reel =new Reel[3];	
	let flash;
	let holdButton = new HoldButton[3];

    let gambleButton= null;
	let playButton = new Button("Play");
    let doubleButton = new Button("Double");
    let winPanel = new Panel();
    let timeDialog;
    let winningsLabel;
    let winAmount;

   	let startTime;
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

	function setup()
	{
	   createCanvas(360,400);

	   flash = new FlashMessage(this);

	   //setLayout(null);

       for (let i=0; i <3; i++)
	   {
	        reel[i] = new Reel(i, this);
	        holdButton[i] = new HoldButton(i, this);
	        add(holdButton[i]);
	        holdButton[i].reshape(insets().left + 80*i,
	            insets().top +5, 70, 50);
	   }

       gambleButton=new GambleButton(this);
       add(gambleButton);
       gambleButton.reshape(insets().left,insets().top + 65,70,50);

       add(doubleButton);
       doubleButton.reshape(insets().left + 80,insets().top + 65,70,50);

	   add(playButton);
	   playButton.reshape(insets().left + 160,insets().top + 65,70,50);

       timeDialog = new TimeDialog(this);

       winAmount = new ObservableWin();
       winningsLabel= new WinLabel(winAmount);
       winAmount.setValue(0);
       add(winPanel);
	   winPanel.reshape(insets().left -65, insets().top - 115,70,60);
       winPanel.add(winningsLabel);
       winPanel.show();

	   repaint();
	   flash.show();
       startTime = System.currentTimeMillis();


}

 /*   public Insets insets()
    {
        return new Insets(230,70,50,50);
    }

	public void start() {
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

		   if (holdButton[i].isHeld())
		   {
		        reelSpinning--;
		        holdButton[i].reset();
		   }
		   else
		   {
		        reel[i].spin(i);
		   }
		}
	}

	function waitForReel()
	{
        while (reelSpinning > 0) {
            try
            {
                 wait();
            }
            catch (e)
            {
            }
        }
	}

	function reelStopped()
	{
	    reelSpinning--;
	    notify();
	}

	function checkHoldAvailable()
	{
	    a = Math.random();

		if (a<0.3)
		{
		    holdOpt =true;
		    doubleButton.setLabel("");
		    label = "Hold";
		    for (let i=0; i<3; i++)
		    {
		        holdButton[i].setLabel(label);

		    }
		}
		else
		{
		    holdOpt=false;
		    doubleButton.setLabel("Double");
	        for (let i=0; i<3; i++)
		    {
		        holdButton[i].setLabel("    ");

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
		        holdButton[i].setLabel(label);
		        holdButton[i].set();
		    }
		    playButton.setLabel("Collect");
		    doubleButton.setLabel("");
		}
		else
		{
		    if (!holdOpt) doubleButton.setLabel("Double");
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

		if ((reel[0].currentImage() == getImage(getCodeBase(),"x3.gif")) |
			(reel[0].currentImage() == getImage(getCodeBase(),"x4.gif")))
				winnings = winnings*2;
		if ((reel[0].currentImage() == getImage(getCodeBase(),"x5.gif")) |
			(reel[0].currentImage() == getImage(getCodeBase(),"x6.gif")))
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
			gambleButton.setLabel("Gamble");
        }
		else
		{
		    gamble =false;
		    gambleButton.setLabel("");
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
		redraw();
	}

    function displayReels()
    {
        reelPaint=true;
        redraw();
    }

   function newGame()
    {
	    startTime = System.currentTimeMillis();

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

        fruitThread = new Thread(this);
	    fruitThread.start();
	}


    function update(g)
    {
        paint(g);
    }

    function getMoney()
    {
        return money;
    }

	function paint(g)
	{
        timeToGo = 10000- (System.currentTimeMillis()-startTime);
        if (timeToGo < 0 | money < 1)
        {
            stop();
        }

        flash.show();
        wordFont = new Font("TimesRoman", Font.BOLD, 16);
		g.setFont(wordFont);

        if (!flash.paint() & (reelSpinning <1))
        {
            g.setColor(Color.lightGray);
	        g.fill3DRect(0,0,360,400,true);
	        g.fill3DRect(85,50,200,180,true);
	        g.fill3DRect(85,110,200,60,false);
	        wordFont2 = new Font("TimesRoman", Font.BOLD, 24);
		    g.setColor(Color.yellow);

		    g.setFont(wordFont2);
		    g.drawString("Virtual Vegas", 110,30);

            g.setFont(wordFont);
			g.setColor(Color.blue);
			g.drawString("You have �"+money+ ".      Stake is �" + stake,20,395);

		    reelPaint= true;
	    }

        if ((reelSpinning < 1) & (!timeOut))
		{
            g.setColor(Color.lightGray);
            g.fill3DRect(0,230,360,145,true);

		    var color;

		    if (flash.hide) color = Color.lightGray;
            else color= Color.red;

            g.setColor(color);
            g.drawString(msgString,20,365);

            wordFont2 = new Font("TimesRoman", Font.BOLD, 24);
		    g.setFont(wordFont2);

		    if (flash.hide)
		    {
		        g.setColor(Color.yellow);
		    }

		    g.drawString("Virtual Vegas", 110,30);

            g.setColor(Color.green);
            g.fill3DRect(320,90 ,20, 100,true);
            g.setColor(Color.red);
            g.fill3DRect(320,90,20,
                (let) (((System.currentTimeMillis())-startTime)/1000),true);


		   	for (let i=0; i < 3; i++)
			{
			    if (flash.hide)
			    {
			        holdButton[i].setLabel("");
			        gambleButton.setLabel("");
			    }
			    else
			    {
			        holdButton[i].setLabel(label);
			        if (gamble) gambleButton.setLabel("Gamble");
			    }
			    if (holdButton[i].isHeld() & holdOpt)
			    {
			        holdButton[i].setLabel("Held");
			    }
			}
	    }

		if (reelPaint)
	    {
	        let x = 60;
		    let y = 60;
	        for (let j=0; j< 3; j++)
		    {
			    g.drawImage(reel[j].previousImage(), j*x +100, 53, this);
		    	g.drawImage(reel[j].currentImage(), j*x +100, y+53, this);
			    g.drawImage(reel[j].nextImage(), j*x +100, 2*y +53, this);
		    }
		    reelPaint = false;
		}

	    flash.paintOff();
	}

	function stop()
	{
	    flash.stop();
        timeOut= true;

        if (fruitThread != null)
        {
            checkRecordWin(new Integer(money));
            fruitThread= null;
        }
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


	function action(evt, whatAction)
	{
	    if (evt.target instanceof Button)
	    {
	        let buttonLabel = whatAction;

	        if (buttonLabel == "Play" & fruitThread != null)
	        {
	            restart();
	        }

			if (buttonLabel == "Collect")
			{
			    playButton.setLabel("Play");
			    nudgeOpt= false;
			    label = "";
			    msgString ="";

			    for (let i=0; i < 3; i++)
			    {
			        holdButton[i].reset();
			    }
			    checkWin();

			    repaint();
			}

			if (buttonLabel == "Double")
			{
			    stake *=2;
			    repaint();
			}
	    }
		return true;
	}
	//{{DECLARE_CONTROLS
	//}}


class Reel
{
	
	//Thread thread;
	//FruitMachine parent;

    Reel (i)
    {
		let randNos= [4,2,1,3,1,2,5,6,3,1,4,2];				;
		frame[] = new Image [12];

		let reelPos = 1;
		let k;
		let l;
		let reelNo;

		let a;
        reelNo = i;
        this.parent = parent;
        getImages();
    }

    getImages()
    {
        //MediaTracker myTracker = new MediaTracker(parent);

        for (let i=0;i<12;i++)
        {
			frame[i]= parent.getImage(parent.getCodeBase(),"x"+randNos[i]+".gif");
			myTracker.addImage(frame[i],0);
		}
		try
		{
		    myTracker.waitForAll();
		}
		catch (e)
		{
		    System.out.println("Get Image error" + e);
		}
	}

    spin(i)
    {
		thread = new Thread(this);
		thread.start();
	}

	run() {

        a =random(1);
        k= round(a*10);

        let delay=50;

		for (l= k-9; l < k+1; l++) {
            if (l >0)
            {
	            reelPos = l;
	        }
	        else
	        {
	            reelPos= 10 + l;
	        }

	        displayReels();

	        try
	        {
	           Thread.sleep(delay);
	           delay += 20;
	        }
	        catch (e)
	        {
	        }
		}
	    reelStopped();
	}

	previousImage()
	{
	    return frame[reelPos-1];
	}
    currentImage()
    {
    	return frame[reelPos];
	}
	nextImage()
	{
	    return frame[reelPos+1];
	}
	stop()
	{
	    thread = null;
	}
	nudge()
	{
	    if (reelPos < 10)
	    {
	        reelPos++;
	    }
	    else
	    {
	        reelPos =1;
	    }
	}
}


class HoldButton //extends Button
	{
		//FruitMachine parent;
			
		HoldButton(i)
		{
			this.held = false;
			this.reelNo =i;
		   super();
		   this.parent = parent;

		}
	
		action(evt, whichAction)
		{
		   if (parent.holdOn())
		   {
				held= !held;
				if ( held)
				{
					setLabel("Held");
				}
				else setLabel("Hold");
	
				return true;
		   }
		   else
		   {
				if (nudgeOn())
				{
					nudge(reelNo);
					return true;
				}
				else
				{
					return false;
				}
		   }
		}
	
		isHeld()
		{
			return held;
		}
	
		set()
		{
			held= true;
		}
	
		reset()
		{
			held= false;
		}
	}
	
	class GambleButton //extends Button
	{
		//FruitMachine parent;
	
		GambleButton()
		{
			gamble = false;
		   super();
		   //this.parent = parent;
		}
	
		action(evt, whichAction)
		{
		   if (parent.gambleOn())
		   {
				gamble= !gamble;
				setLabel("");
				parent.gambler();
	
				return true;
		   }
		   else
		   {
				return false;
		   }
		}
	
		isGamble()
		{
			return gamble;
		}
	
		reset()
		{
			gamble= false;
		}
	}
	
	class FlashMessage //implements Runnable
	{
		//FruitMachine parent;
		
		//Thread thread = null;
	
		FlashMessage()
		{
			this.hide = false;
			this.run = true;
			this.flashPaint = false;
			//this.parent = parent;
		}
	
		show()
		{
			this.run = true;
			if (thread == null)
			{
				thread = new Thread(this);
				thread.start();
			}
		}
	
		run()
		{
			while (true)
			{
				this.hide = !this.hide;
				this.flashPaint= true;
				parent.repaint();
	
				try
				{
					 Thread.sleep(500);
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
			if (thread != null)
			{
	
				thread.stop();
				thread = null;
			}
	
		}
	}
	
	class ObservableWin 
	{
			
		//FruitMachine parent;
	
		ObservableWin()
		{
			this.value=0;
		}
	
		setValue(newValue)
		{
			if (this.value != this.newValue)
			{
				this.value = this.newValue;
				setChanged();
				notifyObservers();
			}
		}
		getValue()
		{
			return this.value;
		}
	}
	
	class WinLabel
	{
		
		WinLabel(win)
		{
			this.winValue = win;
			//winValue.addObserver(this);
			this.wordFont = new Font("TimesRoman", Font.BOLD, 24);
			setFont(wordFont);
			setAlignment(Label.CENTER);
			setBackground(Color.lightGray);
			setForeground(Color.blue);
			setText("                  ");
		}
	
		update(obs, arg)
		{
			if (this.winValue.getValue() > 0)
			{
				setBackground(Color.red);
				setText("WIN!");
			}
			else
			{
				setBackground(Color.lightGray);
				setText(" ");
			}
		}
	}
	
	class TimeDialog
	{
		
	
		TimeDialog()
		{
			super();
			this.fruit =fruit;
	
			dialogLayout = new FlowLayout(FlowLayout.CENTER,20,10);
			setLayout(dialogLayout);
			setTitle("End of game");
			messageLabel = new Label("Do you want to play again?");
			this.winningsLabel = new Label("   ");
			add (winningsLabel);
			add(messageLabel);
			this.endButton = new Button("No");
			this.newButton = new Button ("Yes");
			add(newButton);
			add(endButton);
			this.resize(200,150);
		}
	
		show()
		{
			this.money = new Integer(fruit.getMoney());
			this.message = new let("You finished with �" +
				money.toString());
			this.winningsLabel.setText(message);
			super.show();
	
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
		//{{DECLARE_CONTROLS
		//}}
		//{{DECLARE_MENUS
		//}}
	}
	


















