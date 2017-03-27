
<html>
	<head>
		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
	    <link href="stylesheet.css" rel="stylesheet" type="text/css">
		
	</head>
	
	<body>
		<div class="body-container">
			<?php require_once("header.php"); ?>
			<div class="layer">
				<div class="content">
					<div class="resources">
						<h5><strong>Production</strong></h5>
							<p><button onclick="Wood(1)">Cut Wood</button></p>
							<p><button onclick="Stone(1)">Mine Stone</button></p>
							<p><button onclick="Food(1)">Gather Food</button></p>
					</div>
					<div class="village">
						<table>
							<tr>
								<td>
									<div>
										<h4> Special Resources</h4>
											<p>Skins: <span id="skin" >0</span></p>
											<p>Ore: <span id="ore" >0</span></p>
											<p>Herbs: <span id="herb" >0</span></p>
									</div>
								</td>
								<td>
									<div class="center-text">
										<h4>Wood</h4>
										<img src="images/wood.png" alt="" height="128px" width="128px">
										<p>Wood: <span id="wood">0</span> </p>
										<p>(Max storage: <span id="maxwood">200</span>)</p>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="center-text">
										<h4>Stone</h4>
										<img src="images/stone.png"  alt=""height="128px" width="128px">
										<p>Stone: <span id="stone">0</span> </p>
										<p>(Max storage: <span id="maxstone">200</span>)</p>
									</div>
								</td>
								<td>
									<div class="center-text">
										<h4>Food</h4>
										<img src="images/food.png"  alt=""height="128px" width="128px">
										<p>Food: <span id="food">0</span> </p>
										<p>(Max storage: <span id="maxfood">200</span>)</p>
									</div>
								</td>
							</tr>
						</table>
					</div>
					<div class="armies">
						<div>
							<h4>Storage Upgrade</h4>
								<div>
									<button onclick="createBuilding(barn,1)">Build Barn</button>
									<p><span class="cost">100 wood</span><span class="note">: store +200 food</span></p>
								</div>
								<div>
									<button onclick="createBuilding(woodstock,1)">Build Wood Stockpile</button>
									<p><span class="cost">100 wood</span><span class="note">: store +200 wood</span></p>
								</div>
								<div>
									<button onclick="createBuilding(stonestock,1)">Build Stone Stockpile</button>
									<p><span class="cost">100 wood</span><span class="note">: store +200 stone</span></p>										</div>
								</div>
						</div>
					</div>	
				</div>
					<?php require_once("footer.php"); ?>
			</div>	
		</div>					
		<script src="Click.js" type="text/javascript"></script>
	</body>
</html>