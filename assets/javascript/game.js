

$(document).ready(function() 
{
	
	var randomHPNum = Math.floor(Math.random() * 120) + 20;
	
	
	$('#randomHP').text(randomHPNum);

	carOne = Math.floor(Math.random() * 12);
	carTwo = Math.floor(Math.random() * 12);
	carThree = Math.floor(Math.random() * 12);
	carFour = Math.floor(Math.random() * 12);

	var carsArr = ["carOne", "carTwo", "carThree", "carFour"];
	var randomNumber = [];
	var carsRandomNum;
	var userTotal= 0; 
	var wins= 0;
	var losses = 0;

	$('#totalHP').html(userTotal);

	for (var i = 0; i < carsArr.length; i++) 
	{
		carsRandomNum = Math.floor(Math.random() * 12);
		randomNumber.push(carsRandomNum);
	}

	$('#carOne').on('click', function()
	{
		var carOneVal = randomNumber[0];
		carOneVal = parseInt(carOneVal);
		userTotal += carOneVal;
		$('#totalHP').html(userTotal);
		WinLossReset();
		
	});	

	$('#carTwo').on('click', function()
	{
		var carTwoVal = randomNumber[1];		
		carTwoVal = parseInt(carTwoVal);
		userTotal += carTwoVal;
		$('#totalHP').html(userTotal);
		WinLossReset();
		
	});

	$('#carThree').on('click', function()
	{
		var carThreeVal = randomNumber[2];
		carThreeVal = parseInt(carThreeVal);
		userTotal += carThreeVal;
		$('#totalHP').html(userTotal);
		WinLossReset();
		
	});

	$('#carFour').on('click', function()
	{
		var carFourVal = randomNumber[3];
		carFourVal = parseInt(carFourVal);
		userTotal += carFourVal;
		$('#totalHP').html(userTotal);
		WinLossReset();
		
		
	});
    

	function WinLossReset()
	{
		if (userTotal === randomHPNum)
		{
			wins++;
			userTotal = 0;
			randomHPNum = Math.floor((Math.random() * 120) +20);
			randomNumber = [];
			$('#score').text(randomHPNum);
			for (var i = 0; i < carsArr.length; i++) 
			{
				carsRandomNum = Math.floor(Math.random() * 12);
				randomNumber.push(carsRandomNum);
			}
			$('#totalHP').html(userTotal);
			$('#win-loss').text("Well Done!");
			$('#wins').text(wins);
		}
		if (userTotal > randomHPNum)
		{
			losses++;
			userTotal = 0;
			randomHPNum = Math.floor((Math.random() * 120) +20);
			randomNumber = [];
			$('#score').text(randomHPNum);
			for (var i = 0; i < rocksArr.length; i++)
			{
				carsRandomNum = Math.floor(Math.random() * 12);
				randomNumber.push(carsRandomNum);
			}
			$('#totalHP').html(userTotal);
			$('#win-loss').text("Better luck next time!");
			$('#loss').text(losses);
		}
	}

	// $(".btn").on("click", function() 
	// {
	// 	WinLossReset();
	// });
    

}); // end of js