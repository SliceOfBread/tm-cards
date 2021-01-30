// all names have spaces, dashes, apostrophes removed
// oAllCards[name]
//  .cardNum = card number string
//  .type = [corp|prel|proj]
//  .tags
const oAllCards = {
"AcquiredCompany":{cardNum:"106",type:"proj",tags:["earth"],cost:10,prod:{mc:3},color:"green"},
"AcquiredSpaceAgency":{cardNum:"P35",type:"prel",resources:{ti:6,spacecard:2},color:"green"},
"AdaptationTechnology":{cardNum:"153",type:"proj",tags:["science"], cost:12,vp:1,color:"blue",cardExtra:"Requirements: O2/Ocean/Temp: +/- 2\n(Effect: Your global requirements are +2 or -2 steps, your choice in each case.)\n"},
"AdaptedLichen":{cardNum:"048",type:"proj",tags:["plant"],cost:9,prod:{plant:1},color:"green"},
"AdvancedAlloys":{cardNum:"071",type:"proj",tags:["science"], cost:9,color:"blue",cardExtra:"ti: +1 mc\nsteel: +1mc\n(Effect: Each ti you have is worth 1 mc extra. Each steel you have is worth 1 mc extra.)"},
"AdvancedEcosystems":{cardNum:"135",type:"proj",tags:["plant","microbe","animal"],cost:11,req:{plant:1,animal:1,microbe:1},vp:3,color:"green"},
"AerobrakedAmmoniaAsteroid":{cardNum:"170",type:"proj",tags:["space","event"],cost:26,prod:{heat:3,plant:1},color:"red",cardExtra:"Microbe* Microbe*\n(Add 2 Microbes to ANOTHER card. Increase your heat production 3 steps and your plant productions 1 step.)"},
"AICentral":{cardNum:"208",type:"proj",tags:["science","building"],cost:21,prod:{energy:-1},req:{science:3},vp:1,color:"blue",cardExtra:"-> +Card +Card\n(Action: Draw 2 cards.)\n------\n(Requires 3 Science tags to play. .)\n"},
"Algae":{cardNum:"047",type:"proj",tags:["plant"],cost:10,resources:{plant:1},prod:{plant:2},req:{ocean:5},color:"green"},
"AlliedBanks":{cardNum:"P01",type:"prel",tags:["earth"],resources:{mc:3},prod:{mc:4},color:"green"},
"AntiGravityTechnology":{cardNum:"150",type:"proj",tags:["science"], cost:14,req:{science:7},vp:3,discount:{any:2},color:"blue"},
"Ants":{cardNum:"035",type:"proj",tags:["microbe"],cost:9,req:{o2:4},color:"blue",cardExtra:"any-Microbe Resource -> Microbe Resource\n(Action: Remove 1 Microbe from any card to add 1 to this card.)\n------\n(Requires 4% oxygen. 1 VP per 2 Microbes on this card.)\nVP: 1/2 Microbe Resource"},
"AquiferPumping":{cardNum:"187",type:"proj",tags:["building"], cost:18,color:"blue",cardExtra:"8 mc (steel) -> Ocean Tile\n(Action: Spend 8 mc to place 1 ocean tile. STEEL MAY BE USED as if you were playing a Building card.)"},
"AquiferTurbines":{cardNum:"P02",type:"prel",tags:["power"], resources:{mc:-3,ocean:1},prod:{energy:2},color:"green"},
"ArchaeBacteria":{cardNum:"042",type:"proj",tags:["microbe"],cost:6,prod:{plant:1},req:{"maxtemp":-18},color:"green"},
"ArcticAlgae":{cardNum:"023",type:"proj",tags:["plant"],cost:12,resources:{plant:1},req:{"maxtemp":-12},color:"blue",cardExtra:"any-Ocean Tile: plant plant\n(Effect: When anyone places an ocean tile, gain 2 plants.)\n------\n\n(It must be -12 C or colder to play. Gain 1 plant.)"},
"ArtificialLake":{cardNum:"116",type:"proj",tags:["building"], cost:15,resources:{ocean:1},req:{"temp":-6},vp:1,color:"green",cardExtra:"Ocean Tile*\n(Requires -6 C or warmer. Place 1 ocean tile ON AN AREA NOT RESERVED FOR OCEAN.)\n"},
"ArtificialPhotosynthesis":{cardNum:"115",type:"proj",tags:["science"], cost:12,color:"green",cardExtra:"Increase plant 1 OR energy 2\n(Increase your plant production 1 step or your energy production 2 steps.)"},
"Asteroid":{cardNum:"009",type:"proj",tags:["space","event"],cost:14,resources:{temp:1, ti:2},color:"red",remove:{plant:3}},
"AsteroidMining":{cardNum:"040",type:"proj",tags:["jovian","space"],cost:30,prod:{ti:2},vp:2,color:"green"},
"AsteroidMiningConsortium":{cardNum:"002",type:"proj",tags:["jovian"],cost:13,prod:{ti:1},req:{ti:1},vp:1,reduce:{ti:1},color:"green"},
"BeamFromAThoriumAsteroid":{cardNum:"058",type:"proj",tags:["jovian","space","power"],cost:32,prod:{heat:3,energy:3},req:{jovian:1},vp:1,color:"green"},
"BigAsteroid":{cardNum:"011",type:"proj",tags:["space","event"],cost:27,resources:{temp:2, ti:4},color:"red",remove:{plant:4}},
"Biofuels":{cardNum:"P03",type:"prel",tags:["microbe"],resources:{plant:2},prod:{plant:1,energy:1},color:"green"},
"Biolab":{cardNum:"P04",type:"prel",tags:["science"], resources:{plant:1,card:3},color:"green"},
"BiomassCombustors":{cardNum:"183",type:"proj",tags:["power","building"],cost:4,prod:{energy:2},req:{o2:6},vp:-1,reduce:{plant:1},color:"green"},
"BiosphereSupport":{cardNum:"P05",type:"prel",tags:["plant"],prod:{mc:-1,plant:2},color:"green"},
"Birds":{cardNum:"072",type:"proj",tags:["animal"],cost:10,req:{o2:13},reduce:{plant:2},color:"blue",cardExtra:"-> Animal Resource\n(Action: Add an Animal to this card.)\n------\n\n(Requires 13% oxygen. Decrease any plant production 2 steps. 1 VP for each Animal on this card.)\nVP: 1/Animal"},
"BlackPolarDust":{cardNum:"022",type:"proj",cost:15,resources:{ocean:1},prod:{heat:3,mc:-2},color:"green"},
"BreathingFilters":{cardNum:"114",type:"proj",tags:["science"], cost:11,req:{o2:7},vp:2,color:"green"},
"BribedCommittee":{cardNum:"112",type:"proj",tags:["earth","event"],cost:7,resources:{tr:2},vp:-2,color:"red"},
"BuildingIndustries":{cardNum:"065",type:"proj",tags:["building"], cost:6,prod:{energy:-1,steel:2},color:"green"},
"Bushes":{cardNum:"093",type:"proj",tags:["plant"],cost:10,resources:{plant:2},prod:{plant:2},req:{"temp":-10},color:"green"},
"BusinessContacts":{cardNum:"111",type:"proj",tags:["earth","event"],cost:7,color:"red",cardExtra:"LOOK AT THE TOP 4 CARDS FROM THE DECK. TAKE 2 OF THEM INTO HAND AND DISCARD THE OTHER 2"},
"BusinessEmpire":{cardNum:"P06",type:"prel",tags:["earth"],resources:{mc:-6},prod:{mc:6},color:"green"},
"BusinessNetwork":{cardNum:"110",type:"proj",tags:["earth"],cost:4,prod:{mc:1},color:"blue",cardExtra:"-> Action: LOOK AT THE TOP CARD AND EITHER BUY IT OR DISCARD IT\n------\n(Decrease your mc production 1 step.)"},
"CallistoPenalMines":{cardNum:"082",type:"proj",tags:["jovian","space"],cost:24,prod:{mc:3,},vp:2,color:"green"},
"Capital":{cardNum:"008",type:"proj",tags:["city","building"],cost:26,prod:{mc:5,energy:-2},req:{ocean:4},color:"green",cardExtra:"Special Tile\n(Place this tile. 1 ADDITIONAL VP FOR EACH OCEAN TILE ADJACENT TO THIS CITY TILE.)\nVP: 1/Ocean*"},
"CarbonateProcessing":{cardNum:"043",type:"proj",tags:["building"], cost:6,prod:{energy:-1,heat:3},color:"green"},
"CaretakerContract":{cardNum:"154",type:"proj",cost:3,req:{temp:0},color:"blue",cardExtra:"8 heat -> TR\n(Action: Spend 8 heat to increase your terraform rating 1 step.)\n------\n(Requires 0 C or warmer.)"},
"Cartel":{cardNum:"137",type:"proj",tags:["earth"],cost:8,prod:{mc:1},color:"green",cardExtra:"(Increase your mc production 1 step for each Earth tag you have, including this.)"},
"CEOsFavoriteProject":{cardNum:"149",type:"proj",tags:["event"],cost:1,color:"red",cardExtra:"ADD 1 RESOURCE TO A CARD WITH AT LEAST 1 RESOURCE ON IT"},
"CheungShingMARS":{cardNum:"Z18",type:"corp",tags:["building"], resources:{mc:44},prod:{mc:3},discount:{building:2},color:"blue"},
"CloudSeeding":{cardNum:"004",type:"proj",cost:11,prod:{mc:-1,plant:2},req:{ocean:3},reduce:{heat:1},color:"green"},
"ColonizerTrainingCamp":{cardNum:"001",type:"proj",tags:["jovian","building"],cost:8,req:{maxo2:5},vp:2,color:"green"},
"Comet":{cardNum:"010",type:"proj",tags:["space","event"],cost:21,resources:{ocean:1,temp:1},color:"red",remove:{plant:3}},
"CommercialDistrict":{cardNum:"085",type:"proj",tags:["building"], cost:16,prod:{energy:-1,mc:4,energy:1},color:"green",cardExtra:"Special Tile\n( Place this tile. 1 VP PER ADJACENT CITY TILE.)\nVP: 1/City*"},
"ConvoyFromEuropa":{cardNum:"161",type:"proj",tags:["space","event"],cost:15,resources:{ocean:1,card:1},color:"red"},
"CorporateStronghold":{cardNum:"182",type:"proj",tags:["city","building"],cost:11,resources:{city:1},prod:{energy:-1,mc:3,energy:1},vp:-2,color:"green"},
"CrediCor":{cardNum:"Z01",type:"corp",resources:{mc:57},color:"blue",cardExtra:"Effect:\n-20: 4\n(Effect: After you pay for a card or standard project with a basic cost of 20 mc or more, you gain 4 mc.)"},
"CupolaCity":{cardNum:"029",type:"proj",tags:["city","building"],cost:16,resources:{city:1},prod:{energy:-1,mc:3,},req:{maxo2:9},color:"green"},
"Decomposers":{cardNum:"131",type:"proj",tags:["microbe"],cost:5,req:{o2:3},color:"blue",cardExtra:"Animal/plant/Microbe: Microbe Resource\n(Effect: When you play an Animal, plant, or Microbe tag, including this, add a Microbe to this card.)\n------\n( 1 VP per 3 Microbes on this card.)\nVP: 1/3 Microbe Resource"},
"DeepWellHeating":{cardNum:"003",type:"proj",tags:["power","building"],cost:13,resources:{temp:1},prod:{energy:1},color:"green"},
"DeimosDown":{cardNum:"039",type:"proj",tags:["space","event"],cost:31,resources:{temp:3,steel:4},color:"red",remove:{plant:8}},
"DesignedMicroOrganisms":{cardNum:"155",type:"proj",tags:["science","microbe"],cost:16,prod:{plant:2},req:{"maxtemp":-14},color:"green"},
"DevelopmentCenter":{cardNum:"014",type:"proj",tags:["science","building"],cost:11,color:"blue",cardExtra:"energy -> +Card\n(Action: Spend 1 energy to draw a card.)"},
"DomedCrater":{cardNum:"016",type:"proj",tags:["city","building"],cost:24,resources:{city:1,plant:3},prod:{energy:-1,mc:3,},req:{maxo2:7},vp:1,color:"green"},
"DomeFarming":{cardNum:"P07",type:"prel",tags:["plant","building"],prod:{mc:2,plant:1},color:"green"},
"Donation":{cardNum:"P08",type:"prel",resources:{mc:21},color:"green"},
"DustSeals":{cardNum:"119",type:"proj",cost:2,req:{maxocean:3},vp:1,color:"green"},
"EarlySettlement":{cardNum:"P09",type:"prel",tags:["city","building"],resources:{city:1},prod:{plant:1},color:"green"},
"EarthCatapult":{cardNum:"070",type:"proj",tags:["earth"],cost:23,vp:2,discount:{any:2},color:"blue"},
"EarthOffice":{cardNum:"105",type:"proj",tags:["earth"],cost:1,discount:{earth:3},color:"blue"},
"EccentricSponsor":{cardNum:"P11",type:"prel",color:"green",cardExtra:"PLAY A CARD FROM HAND, REDUCING ITS COST BY 25 mc"},
"EcoLine":{cardNum:"Z02",type:"corp",tags:["plant"],resources:{mc:36,plant:3},prod:{plant:2},color:"blue",cardExtra:"Effect:\n7 plant -> Greenery Tile\n(Effect: You may always pay 7 plants, instead of 8, to place 1 greenery.)"},
"EcologicalZone":{cardNum:"128",type:"proj",tags:["animal","plant"],cost:12,req:{greenery:1},color:"blue",cardExtra:"Animal/plant: Animal Resource\n(Effect: When you play an Animal or plant tag (including these 2), add an Animal to this card.)\n------\nSpecial Tile*\n(Requires that you have a greenery tile. Place this tile adjacent to any greenery tile. 1 VP per 2 Animals on this card.)\nVP: 1/2 Animal Resource"},
"EcologyExperts":{cardNum:"P10",type:"prel",tags:["plant","microbe"],prod:{plant:1},color:"green",cardExtra:"PLAY A CARD FROM HAND, IGNORING GLOBAL REQUIREMENTS\n(Increase your plant production 1 step.)"},
"ElectroCatapult":{cardNum:"069",type:"proj",tags:["building"], cost:17,prod:{energy:-1},req:{maxo2:8},vp:1,color:"blue",cardExtra:"plant/steel -> 7 mc\n(Action: Spend 1 plant or 1 steel to gain 7 mc.)"},
"EnergySaving":{cardNum:"189",type:"proj",tags:["power"], cost:15,color:"green",cardExtra:"Increase energy/City*\n(Increase your energy production 1 step for each City tile in play.)"},
"EnergyTapping":{cardNum:"201",type:"proj",tags:["power"], cost:3,prod:{energy:1},vp:-1,reduce:{energy:1},color:"green"},
"EOSChasmaNationalPark":{cardNum:"026",type:"proj",tags:["plant","building"],cost:16,resources:{plant:3},prod:{mc:2,},req:{"temp":-12},vp:1,color:"green",cardExtra:"Animal* Resource\n(Add 1 Animal TO ANY ANIMAL CARD.)\n"},
"EquatorialMagnetizer":{cardNum:"015",type:"proj",tags:["building"], cost:11,color:"blue",cardExtra:"Decrease energy 1 -> TR\n(Action: Decrease your energy production 1 step to increase your terraform rating 1 step.)"},
"ExperimentalForest":{cardNum:"P12",type:"prel",tags:["plant"],resources:{greenery:1,plantcard:2},color:"green"},
"ExtremeColdFungus":{cardNum:"134",type:"proj",tags:["microbe"],cost:13,req:{"maxtemp":-10},color:"blue",cardExtra:"-> plant\nOR -> Microbe Microbe*\n(Action: Gain 1 plant or add 2 Microbes to ANOTHER card.)\n------\n(It must be -10 C or colder.)"},
"Farming":{cardNum:"118",type:"proj",tags:["plant"],cost:16,resources:{plant:2},prod:{mc:2,plant:2},req:{temp:4},vp:2,color:"green"},
"Fish":{cardNum:"052",type:"proj",tags:["animal"],cost:9,req:{temp:2},color:"blue",cardExtra:"-> Animal Resource\n(Action: Add 1 Animal to this card.)\n------\nReduce any-plant 1\n(Requires +2 C or warmer. Decrease any plant production 1 step. 1 VP for each Animal on this card.)\nVP: 1/Animal Resource"},
"Flooding":{cardNum:"188",type:"proj",tags:["event"],cost:7,resources:{ocean:1},vp:-1,color:"red",cardExtra:"-4 mc*\n(IF THERE ARE TILES ADJACENT TO THIS OCEAN TILE, YOU MAY REMOVE 4 mc FROM THE OWNER OF ONE OF THOSE TILES.)\n"},
"FoodFactory":{cardNum:"041",type:"proj",tags:["building"], cost:12,prod:{mc:4,plant:-1},vp:1,color:"green"},
"FueledGenerators":{cardNum:"100",type:"proj",tags:["power","building"],cost:1,prod:{mc:-1,energy:1},color:"green"},
"FuelFactory":{cardNum:"180",type:"proj",tags:["building"], cost:6,prod:{energy:-1,mc:1,ti:1},color:"green"},
"FusionPower":{cardNum:"132",type:"proj",tags:["science","power","building"],cost:14,prod:{energy:3},req:{energy:2},color:"green"},
"GalileanMining":{cardNum:"P13",type:"prel",tags:["jovian"],resources:{mc:-5},prod:{ti:2},color:"green"},
"GanymedeColony":{cardNum:"081",type:"proj",tags:["jovian","space","city"],cost:20,color:"green",cardExtra:"City Tile*\n(Place a City tile ON THE RESERVED AREA. 1 VP per Jovian tag you have.)\nVP: 1/Jovian"},
"GeneRepair":{cardNum:"091",type:"proj",tags:["science"], cost:12,prod:{mc:2,},req:{science:3},vp:2,color:"green"},
"GeothermalPower":{cardNum:"117",type:"proj",tags:["power","building"],cost:11,prod:{energy:2},color:"green"},
"GHGFactories":{cardNum:"126",type:"proj",tags:["building"], cost:11,prod:{energy:-1,heat:4},color:"green"},
"GHGProducingBacteria":{cardNum:"034",type:"proj",tags:["science","microbe"],cost:8,req:{o2:4},color:"blue",cardExtra:"-> Microbe Resource\nOR Microbe Resource Microbe Resource -> TempUp 1\n(Action: Add 1 Microbe to this card, or remove 2 Microbes to raise temperature 1 step.)\n------\n(Requires 4% oxygen.)"},
"GiantIceAsteroid":{cardNum:"080",type:"proj",tags:["space","event"],cost:36,resources:{ocean:2,temp:2},color:"red",remove:{plant:6}},
"GiantSpaceMirror":{cardNum:"083",type:"proj",tags:["power","space"],cost:17,prod:{energy:3},color:"green"},
"Grass":{cardNum:"087",type:"proj",tags:["plant"],cost:11,resources:{plant:3},prod:{plant:1},req:{"temp":-16},color:"green"},
"GreatAquifer":{cardNum:"P14",type:"prel",resources:{ocean:2},color:"green"},
"GreatDam":{cardNum:"136",type:"proj",tags:["power","building"],cost:12,prod:{energy:2},req:{ocean:4},vp:1,color:"green"},
"GreatEscarpmentConsortium":{cardNum:"061",type:"proj",cost:6,prod:{steel:1},req:{steel:1},reduce:{steel:1},color:"green",cardExtra:"(Decrease any steel production 1 step and increase your own 1 step.)"},
"Greenhouses":{cardNum:"096",type:"proj",tags:["plant","building"],cost:6,color:"green",cardExtra:"plant/any-City\n(Gain 1 plant for each City tile in play.)"},
"Hackers":{cardNum:"125",type:"proj",cost:3,prod:{energy:-1,mc:2,energy:1},vp:-1,reduce:{mc:2},color:"green"},
"Heather":{cardNum:"088",type:"proj",tags:["plant"],cost:6,resources:{plant:1},prod:{plant:1},req:{"temp":-14},color:"green"},
"HeatTrappers":{cardNum:"178",type:"proj",tags:["power","building"],cost:6,prod:{energy:1},vp:-1,reduce:{heat:2},color:"green",cardExtra:" "},
"Helion":{cardNum:"Z03",type:"corp",tags:["space"], resources:{mc:42},prod:{heat:3},color:"blue",cardExtra:"Effect:\nX heat = X mc\n(Effect: You may use heat as mc. You may not use mc as heat.)"},
"Herbivores":{cardNum:"147",type:"proj",tags:["animal"],cost:12,req:{o2:8},reduce:{plant:1},color:"blue",cardExtra:"plantation: Animal Resource\n(Effect: When you place a greenery tile, add an Animal to this card.)\n------\nAnimal Resource\n\n( Add 1 Animal to this card. Decrease any plant production 1 step. 1 VP per 2 Animals on this card.)\nVP: 1/2 Animal Resource"},
"HiredRaiders":{cardNum:"124",type:"proj",tags:["event"],cost:1,color:"red",cardExtra:"STEAL 2 any-steel\nOR STEAL 3 any-mc\n(Steal up to 2 steal, or 3 mc from any player.)"},
"HousePrinting":{cardNum:"P36",type:"proj",tags:["building"], cost:10,prod:{steel:1},vp:1,color:"green"},
"HugeAsteroid":{cardNum:"P15",type:"prel",resources:{temp:3, mc:-5},color:"green"},
"IceAsteroid":{cardNum:"078",type:"proj",tags:["space","event"],cost:23,resources:{ocean:2},color:"red"},
"IceCapMelting":{cardNum:"181",type:"proj",tags:["event"],cost:5,resources:{ocean:1},req:{temp:2},color:"red"},
"ImmigrantCity":{cardNum:"200",type:"proj",tags:["city","building"],cost:13,resources:{city:1},prod:{energy:-1,mc:2},color:"blue",cardExtra:"City*: mc:1\n(Effect: Each time a City tile is placed, including this, increase your mc production 1 step.)\n------\n( and decrease your mc production 2 steps. Place a City tile.)"},
"ImmigrationShuttles":{cardNum:"198",type:"proj",tags:["earth","space"],cost:31,prod:{mc:5,},color:"green",cardExtra:"(1 VP for every 3rd City in play.)\nVP: 1/3 City"},
"ImportedGHG":{cardNum:"162",type:"proj",tags:["earth","space","event"],cost:7,resources:{heat:3},prod:{heat:1},color:"red"},
"ImportedHydrogen":{cardNum:"019",type:"proj",tags:["earth","space","event"],cost:16,resources:{ocean:1},color:"red",cardExtra:"3 plants OR 3 Microbe* Resource OR 2 Animal* resource\n(Gain 3 plants, or add 3 Microbes or 2 Animals to ANOTHER card.)"},
"ImportedNitrogen":{cardNum:"163",type:"proj",tags:["earth","space","event"],cost:23,resources:{tr:1,plant:4},color:"red",cardExtra:"Gain Microbe* 3\nGain Animal* 2\n(Add 3 Microbes to ANOTHER card and 2 Animals to ANOTHER card.)"},
"ImportOfAdvancedGHG":{cardNum:"167",type:"proj",tags:["earth","space","event"],cost:9,prod:{heat:2},color:"red"},
"IndenturedWorkers":{cardNum:"195",type:"proj",tags:["event"],cost:0,vp:-1,color:"red",cardExtra:"NEXT CARD: -8 mc\n(The next card you play this generation costs 8 mc less.)\n"},
"IndustrialCenter":{cardNum:"123",type:"proj",tags:["building"], cost:4,color:"blue",cardExtra:"7 mc -> steel production\n(Action: Spend 7 mc to increase your steel production 1 step.)\n------\nSpecial Tile*\n(Place this tile ADJACENT TO A CITY TILE.)"},
"IndustrialMicrobes":{cardNum:"158",type:"proj",tags:["microbe","building"],cost:12,prod:{energy:1,steel:1},color:"green"},
"Insects":{cardNum:"148",type:"proj",tags:["microbe"],cost:9,req:{o2:6},color:"green",cardExtra:"\nIncrease plant/plant tag\n(Increase your plant production 1 step for each plant tag you have.)"},
"Insulation":{cardNum:"152",type:"proj",cost:2,color:"green",cardExtra:"Decrease heat X\nmc:X\n(Decrease your heat production any number of steps and increase your mc production the same number of steps.)"},
"InterplanetaryCinematics":{cardNum:"Z05",type:"corp",tags:["building"], resources:{mc:30,steel:20},color:"blue",cardExtra:"Effect:\nEvent: 2 mc\n(Effect: Each time you play an event, you gain 2 mc.)"},
"InterstellarColonyShip":{cardNum:"027",type:"proj",tags:["earth","space","event"],cost:24,req:{science:5},vp:4,color:"red"},
"InventionContest":{cardNum:"192",type:"proj",tags:["science","event"],cost:2,color:"red",cardExtra:"LOOK AT THE TOP 3 CARDS FROM THE DECK. TAKE 1 OF THEM INTO HAND AND DISCARD THE OTHER 2"},
"InventorsGuild":{cardNum:"006",type:"proj",tags:["science"], cost:9,color:"blue",cardExtra:"-> Action: LOOK AT THE TOP CARD AND EITHER BUY IT OR DISCARD IT"},
"Inventrix":{cardNum:"Z06",type:"corp",tags:["science"], resources:{mc:45,card:3},color:"blue",cardExtra:"Effect:\nRequirements: O2/Ocean/Temp: +/- 2\n(Effect: Your temperature, oxygen, and ocean requirements are +2 or -2 steps, your choice in each case.)"},
"InvestmentLoan":{cardNum:"151",type:"proj",tags:["earth","event"],cost:3,resources:{mc:10},prod:{mc:-1},color:"red"},
"IoMiningIndustries":{cardNum:"092",type:"proj",tags:["jovian","space"],cost:41,prod:{mc:2,ti:2},color:"green",cardExtra:"1 VP per Jovian tag you have.)\n1/Jovian"},
"IoResearchOutpost":{cardNum:"P16",type:"prel",tags:["science","jovian"],resources:{card:1},prod:{ti:1},color:"green"},
"Ironworks":{cardNum:"101",type:"proj",tags:["building"], cost:11,color:"green",cardExtra:"4 energy -> steel O2\n(Action Spend 4 energy to gain 1 steel and increase oxygen 1 step.)"},
"KelpFarming":{cardNum:"055",type:"proj",tags:["plant"],cost:17,resources:{plant:2},prod:{mc:2,plant:3},req:{ocean:6},vp:1,color:"green"},
"LagrangeObservatory":{cardNum:"196",type:"proj",tags:["science","space"],cost:9,resources:{card:1},vp:1,color:"green"},
"LakeMarineris":{cardNum:"053",type:"proj",cost:18,resources:{ocean:2},req:{temp:0},vp:2,color:"green"},
"LandClaim":{cardNum:"066",type:"proj",tags:["event"],cost:1,color:"red",cardExtra:"PLACE YOUR MARKER ON A NON-RESERVED AREA. ONLY YOU MAY PLACE A TILE HERE."},
"LargeConvoy":{cardNum:"143",type:"proj",tags:["earth","space","event"],cost:36,resources:{ocean:1,card:2},vp:2,color:"red",cardExtra:"5 plant/4 Animal* Resource\n(Gain 5 plants or add 4 Animals to ANOTHER card.)\n"},
"LavaFlows":{cardNum:"140",type:"proj",tags:["event"],cost:18,resources:{temp:2},color:"red",cardExtra:"Special Tile*\n(place this tile ON EITHER THARSIS THOLUS, ASCRAEUS MONS, PAVONIS MONS OR ARSIA MONS.)"},
"LavaTubeSettlement":{cardNum:"P37",type:"proj",tags:["city","building"],cost:15,resources:{city:1},prod:{energy:-1,mc:2,},color:"green",cardExtra:"(Place a City tile ON A VOLCANIC AREA, same as Lava Flows, regardless of adjacent cities.)"},
"Lichen":{cardNum:"159",type:"proj",tags:["plant"],cost:7,prod:{plant:1},req:{"temp":-24},color:"green"},
"LightningHarvest":{cardNum:"046",type:"proj",tags:["power"], cost:8,prod:{energy:1,mc:1},req:{science:3},vp:1,color:"green"},
"Livestock":{cardNum:"184",type:"proj",tags:["animal"],cost:13,prod:{mc:2,},req:{o2:9},color:"blue",cardExtra:"-> Animal\n(Action: Add 1 Animal to this card.)\n------\nReduce plant 1\n(Requires 9% oxygen. Decrease your plant production 1 step and increase your mc production 2 steps. 1 VP for each Animal on this card.\nVP: 1/Animal"},
"Loan":{cardNum:"P17",type:"prel",resources:{mc:30},prod:{mc:-2},color:"green"},
"LocalHeatTrapping":{cardNum:"190",type:"proj",tags:["event"],cost:1,color:"red",cardExtra:"-5 heat +4 plant OR +2 Animal* Resource\n(Spend 5 heat to gain either 4 plants, or to add 2 Animals to ANOTHER card.)"},
"LunarBeam":{cardNum:"030",type:"proj",tags:["earth","power"],cost:13,prod:{heat:2,energy:2,mc:-2},color:"green"},
"MagneticFieldDome":{cardNum:"171",type:"proj",tags:["building"], cost:5,resources:{tr:1},prod:{energy:-2,plant:1},color:"green"},
"MagneticFieldGenerators":{cardNum:"165",type:"proj",tags:["building"], cost:20,resources:{tr:3},prod:{energy:-4,plant:2},color:"green"},
"Mangrove":{cardNum:"059",type:"proj",tags:["plant"],cost:12,req:{temp:4},vp:1,color:"green",cardExtra:"Greenery Tile*\n(Place a greenery tile ON AN AREA RESERVED FOR OCEAN and raise oxygen 1 step. Disregard normal placement restrictions for this.)\n"},
"MarsUniversity":{cardNum:"073",type:"proj",tags:["science","building"],cost:8,vp:1,color:"blue",cardExtra:"Science: -Card +Card\nEffect: When you play a Science tag, including this, you may discard a card from hand to draw a card.\n------\n"},
"MartianIndustries":{cardNum:"P18",type:"prel",tags:["building"], resources:{mc:6},prod:{energy:1,steel:1},color:"green"},
"MartianRails":{cardNum:"007",type:"proj",tags:["building"], cost:13,color:"blue",cardExtra:"energy -> mc/any-City*\n(Action: Spend 1 energy to gain 1 mc for each City tile ON MARS.)"},
"MartianSurvey":{cardNum:"P38",type:"proj",tags:["science","event"],cost:9,resources:{card:2},req:{maxo2:4},vp:1,color:"red"},
"MassConverter":{cardNum:"094",type:"proj",tags:["science","power"],cost:8,prod:{energy:6},req:{science:5},discount:{space:2},color:"blue"},
"MediaArchives":{cardNum:"107",type:"proj",tags:["earth"],cost:8,color:"green",cardExtra:"1 mc/Event*\n(Gain 1 mc for each Event EVER PLAYED by all players.)"},
"MediaGroup":{cardNum:"109",type:"proj",tags:["earth"],cost:6,color:"blue",cardExtra:"Event: 3 mc\n(Effect: After you play an Event card, you gain 3 mc.)"},
"MedicalLab":{cardNum:"207",type:"proj",tags:["science","building"],cost:13,vp:1,color:"green",cardExtra:"Increase mc/2 Building\n(Increase your mc production 1 step for every 2 Building tags you have, including this.)\n"},
"MetalRichAsteroid":{cardNum:"P19",type:"prel",resources:{temp:1,steel:4,ti:4},color:"green"},
"MetalsCompany":{cardNum:"P20",type:"prel",prod:{mc:1,steel:1,ti:1},color:"green"},
"MethaneFromTitan":{cardNum:"018",type:"proj",tags:["jovian","space"],cost:28,prod:{heat:2,plant:2},req:{o2:2},vp:2,color:"green"},
"MicroMills":{cardNum:"164",type:"proj",cost:3,prod:{heat:1},color:"green"},
"Mine":{cardNum:"056",type:"proj",tags:["building"], cost:4,prod:{steel:1},color:"green"},
"MineralDeposit":{cardNum:"062",type:"proj",tags:["event"],cost:5,resources:{steel:5},color:"red"},
"MiningArea":{cardNum:"064",type:"proj",tags:["building"], cost:4,color:"green",cardExtra:"Special Tile*\n[Increase steel 1 OR ti 1]*\n(Place this tile on an area with a steel or ti placement bonus, adjacent to another of your tiles. Increase your production of that resource 1 step.)"},
"MiningExpedition":{cardNum:"063",type:"proj",tags:["event"],cost:12,resources:{o2:1,steel:2},color:"red",cardExtra:"(Remove 2 plants from any player.)"},
"MiningGuild":{cardNum:"Z04",type:"corp",tags:["building","building"],resources:{mc:30,steel:5},prod:{steel:1},color:"blue",cardExtra:"Effect:\nsteel/ti: (Effect: Each time you get any steel or ti as a placement bonus on the map, increase your steel production 1 step.)"},
"MiningOperations":{cardNum:"P21",type:"prel",tags:["building"], resources:{steel:4},prod:{steel:2},color:"green"},
"MiningRights":{cardNum:"067",type:"proj",tags:["building"], cost:9,color:"green",cardExtra:"Special Tile*\nIncrease steel 1 or ti 1\n(Place this tile on an area with a steel or ti placement bonus. Increase that production 1 step.)"},
"MirandaResort":{cardNum:"051",type:"proj",tags:["jovian","space"],cost:12,vp:1,color:"green",cardExtra:"Increase mc/Earth\n(Increase your mc production 1 step for each Earth tag you have.)\n"},
"Mohole":{cardNum:"P22",type:"prel",tags:["building"], resources:{heat:3},prod:{heat:3},color:"green"},
"MoholeArea":{cardNum:"142",type:"proj",tags:["building"], cost:20,prod:{heat:4},color:"green",cardExtra:"Special Tile*\n(Increase your heat production 4 steps. Place this tile ON AN AREA RESERVED FOR OCEAN.)"},
"MoholeExcavation":{cardNum:"P23",type:"prel",tags:["building"], resources:{heat:2},prod:{heat:2,steel:1},color:"green"},
"Moss":{cardNum:"122",type:"proj",tags:["plant"],cost:4,resources:{plant:-1},prod:{plant:1},req:{ocean:3},color:"green"},
"NaturalPreserve":{cardNum:"044",type:"proj",tags:["science","building"],cost:9,prod:{mc:1,},req:{maxo2:4},vp:1,color:"green",cardExtra:"Special Tile*\n(Place this tile NEXT TO NO OTHER TILE.)\n"},
"NitriteReducingBacteria":{cardNum:"157",type:"proj",tags:["microbe"],cost:11,color:"blue",cardExtra:"-> Microbe Resource\nOR 3 Microbe Resource -> TR\n(Action: Add 1 Microbe to this card, or remove 3 Microbes to increase your TR 1 step.\n------\nMicrobe Microbe Microbe (Add 3 Microbes to this card.)"},
"NitrogenDelivery":{cardNum:"P24",type:"prel",resources:{tr:1,mc:5},prod:{plant:1},color:"green"},
"NitrogenRichAsteroid":{cardNum:"037",type:"proj",tags:["space","event"],cost:31,resources:{tr:2,temp:1},prod:{plant:1},color:"red",cardExtra:"Increase plant 1 OR\nIf 3 plant tags:(Raise your terraforming rating 2 steps and temperature 1 step. Increase your plant production 1 step, or 4 steps if you have 3 plant tags.)"},
"NitrophilicMoss":{cardNum:"146",type:"proj",tags:["plant"],cost:8,resources:{plant:-2},prod:{plant:2},req:{ocean:3},color:"green"},
"NoctisCity":{cardNum:"017",type:"proj",tags:["city","building"],cost:18,prod:{energy:-1,mc:3,},color:"green",cardExtra:"City Tile*\n(Place a City ON THE RESERVED AREA, disregarding normal placement restrictions.)"},
"NoctisFarming":{cardNum:"176",type:"proj",tags:["plant","building"],cost:10,resources:{plant:2},prod:{mc:1,},req:{"temp":-20},vp:1,color:"green"},
"NuclearPower":{cardNum:"045",type:"proj",tags:["power","building"],cost:10,prod:{energy:3,mc:-2},color:"green"},
"NuclearZone":{cardNum:"097",type:"proj",tags:["earth"],cost:10,resources:{temp:2},vp:-2,color:"green",cardExtra:"Special Tile\n(Place this tile.)\n"},
"OlympusConference":{cardNum:"185",type:"proj",tags:["science","earth","building"],cost:10,color:"blue",cardExtra:"Science: Science Resource OR -Science Resource +Card\n(When you play a Science tag, including this, either add a Science resource to this card, or remove a Science resource from this card to draw a card.)\n------\nVP: 1\n--- Ed. note: This should likely say .Effect:. on the card."},
"OpenCity":{cardNum:"108",type:"proj",tags:["city","building"],cost:23,resources:{city:1,plant:2},prod:{energy:-1,mc:4,energy:1},req:{o2:12},vp:1,color:"green"},
"OptimalAerobraking":{cardNum:"031",type:"proj",tags:["space"], cost:7,color:"blue",cardExtra:"Space Event: 3 mc heat heat heat\n(Effect: When you play a Space Event, you gain 3 mc and 3 heat.)"},
"OrbitalConstructionYard":{cardNum:"P25",type:"prel",tags:["space"], resources:{ti:4},prod:{ti:1},color:"green"},
"OreProcessor":{cardNum:"104",type:"proj",tags:["building"], cost:13,color:"blue",cardExtra:"4 energy -> ti O2\n(Action: Spend 4 energy to gain 1 ti and increase oxygen 1 step.)"},
"PermafrostExtraction":{cardNum:"191",type:"proj",tags:["event"],cost:8,resources:{ocean:1},req:{"temp":-8},color:"red"},
"PeroxidePower":{cardNum:"089",type:"proj",tags:["power","building"],cost:7,prod:{mc:-1,energy:2},color:"green"},
"Pets":{cardNum:"172",type:"proj",tags:["earth","animal"],cost:10,color:"blue",cardExtra:"any-City: Animal Resource\nANIMALS MAY NOT BE REMOVED FROM THIS CARD.\n(Effect: When any City tile is placed, add an Animal to this card.)\n------\nAnimal Resource\n(Add 1 Animal to this card. 1 VP per 2 Animals here.)\nVP: 1/2 Animal Resource"},
"PhoboLog":{cardNum:"Z07",type:"corp",tags:["space"], resources:{mc:23,ti:10},color:"blue",cardExtra:"Effect:\nti: +1 mc\n(Effect: Your ti resources are each worth 1 mc extra.)\n--- Ed. note: It is not \"Phoblog.\""},
"PhobosSpaceHaven":{cardNum:"021",type:"proj",tags:["space","city"],cost:25,prod:{ti:1},vp:3,color:"green",cardExtra:"City Tile*\n(Increase your ti production 1 step and place a City tile ON THE RESERVED AREA.)\n"},
"PhysicsComplex":{cardNum:"095",type:"proj",tags:["science","building"],cost:12,color:"blue",cardExtra:"6 energy -> Science Resource\n(Action: Spend 6 energy to add a Science resource to this card.)\n------\n(2 VP for each Science resource on this card.)\nVP: 2/Science Resource"},
"Plantation":{cardNum:"193",type:"proj",tags:["plant"],cost:15,resources:{greenery:1},req:{science:2},color:"green"},
"PointLuna":{cardNum:"Z19",type:"corp",tags:["earth","space"],resources:{mc:38},prod:{ti:1},color:"blue",cardExtra:"Effect:\nEarth: +Card\n(Effect: When you play an Earth tag, including this, draw a card.)"},
"PolarIndustries":{cardNum:"P26",type:"prel",tags:["building"], resources:{ocean:1},prod:{heat:2},color:"green"},
"PowerGeneration":{cardNum:"P27",type:"prel",tags:["power"], prod:{energy:3},color:"green"},
"PowerGrid":{cardNum:"102",type:"proj",tags:["power"], cost:18,color:"green",cardExtra:"Increase energy/energy tag\n(Increase your energy production step for each energy tag you have, including this.)"},
"PowerInfrastructure":{cardNum:"194",type:"proj",tags:["power","building"],cost:4,color:"blue",cardExtra:"X energy -> X mc\n(Action: Spend any amount of energy and gain that amount of mc.)"},
"PowerPlant":{cardNum:"141",type:"proj",tags:["power","building"],cost:4,prod:{energy:1},color:"green"},
"PowerSupplyConsortium":{cardNum:"160",type:"proj",tags:["power"], cost:5,prod:{energy:1},req:{energy:2},reduce:{energy:1},color:"green"},
"Predators":{cardNum:"024",type:"proj",tags:["animal"],cost:14,req:{o2:11},color:"blue",cardExtra:"any-Animal Resource -> Animal Resource\n(Action: Remove 1 Animal from any card and add it to this card.)\n------\n(Requires 11% oxygen. 1 VP per Animal on this card.)\nVP: 1/Animal"},
"ProtectedHabitats":{cardNum:"173",type:"proj",cost:5,color:"green",cardExtra:"OPPONENTS MAY NOT REMOVE YOUR\nplant Animal Microbe"},
"ProtectedValley":{cardNum:"174",type:"proj",tags:["plant","building"],cost:23,resources:{greenery:1},prod:{mc:2},color:"green",cardExtra:"(Place on a greenery tile ON AN AREA RESERVED FOR OCEAN, disregarding normal placement restrictions, and increase oxygen 1 step.)"},
"Psychrophiles":{cardNum:"P39",type:"proj",tags:["microbe"],cost:2,req:{"maxtemp":-20},color:"blue",cardExtra:"-> Microbe\nplant cards: Microbe = 2mc\n(Action: Add a microbe to this card.\nEffect: When paying for a plant card, microbes here may be used as 2 mc each.)\n------\n(Requires temperature -20 C or colder.)"},
"QuantumExtractor":{cardNum:"079",type:"proj",tags:["science","power"],cost:13,prod:{energy:4},req:{science:4},discount:{space:2},color:"blue"},
"RadChemFactory":{cardNum:"205",type:"proj",tags:["building"], cost:8,resources:{tr:2},prod:{energy:-1,},color:"green"},
"RadSuits":{cardNum:"186",type:"proj",cost:6,prod:{mc:1},req:{city:2},vp:1,color:"green"},
"RegolithEaters":{cardNum:"033",type:"proj",tags:["science","microbe"],cost:13,color:"blue",cardExtra:"-> Microbe\nOR Microbe Microbe -> O2\n(Action: Add 1 Microbe to this card, or remove 2 Microbes from this card to raise oxygen level 1 step.)"},
"ReleaseOfInertGases":{cardNum:"036",type:"proj",tags:["event"],cost:14,resources:{tr:2},color:"red"},
"Research":{cardNum:"090",type:"proj",tags:["science","science"],cost:11,resources:{card:2},vp:1,color:"green"},
"ResearchCoordination":{cardNum:"P40",type:"proj",tags:["wild"],cost:4,color:"green"},
"ResearchNetwork":{cardNum:"P28",type:"prel",tags:["wild"],resources:{card:3},prod:{mc:1},color:"green"},
"ResearchOutpost":{cardNum:"020",type:"proj",tags:["science", "city","building"],cost:18,discount:{any:1},color:"blue",cardExtra:"City Tile*\n(Place a city tile NEXT TO NO OTHER TILE.)"},
"RestrictedArea":{cardNum:"199",type:"proj",tags:["science"], cost:11,color:"blue",cardExtra:"2 mc -> +Card\n(Action: Spend 2 mc to draw a card.)\n------\nSpecial Tile\n(Place this tile.)"},
"RobinsonIndustries":{cardNum:"Z20",type:"corp",resources:{mc:47},color:"blue",cardExtra:"Action:\n4 mc -> Increase ? 1*\n(Action: Spend 4 mc to increase (one of) your LOWEST PRODUCTION 1 step.)"},
"RoboticWorkforce":{cardNum:"086",type:"proj",tags:["science"], cost:9,color:"green",cardExtra:"COPY A Building.\n(Duplicate only the production box of one of your Building cards.)"},
"RoverConstruction":{cardNum:"038",type:"proj",tags:["building"], cost:8,vp:1,color:"blue",cardExtra:"any-City: 2\n(Effect: When any City tile is placed, gain 2 mc.)\n------\n"},
"Sabotage":{cardNum:"121",type:"proj",tags:["event"],cost:1,color:"red",cardExtra:"-3 any-ti OR -4 any-steel OR -7 any-mc\n(Remove up to 3 ti from any player, or 4 steel, or 7 mc.)"},
"Satellites":{cardNum:"175",type:"proj",tags:["space"], cost:10,prod:{mc:1},color:"green",cardExtra:"/Space.\n(Increase your mc production 1 step for each Space tag you have, including this.)"},
"SaturnSystems":{cardNum:"Z12",type:"corp",tags:["jovian"],resources:{mc:42},prod:{ti:1},color:"blue",cardExtra:"Effect:\nany-Jovian: mc:1\n(Effect: Each time any Jovian tag is put into play, including this, increase your mc production 1 step.)"},
"SearchForLife":{cardNum:"005",type:"proj",tags:["science"], cost:3,req:{maxo2:6},color:"blue",cardExtra:"1 mc -> Microbe*: Science Resource\n(Action: Spend 1 mc to reveal and discard the top card of the draw deck. If that card has a Microbe tag, add a Science resource here.)\n(3 VPs if you have one or more Science resources here.)\nVP: Science Resource*: 3\n"},
"SecurityFleet":{cardNum:"028",type:"proj",tags:["space"], cost:12,color:"blue",cardExtra:"ti -> Fighter Resource\n(Action: Spend 1 ti to add 1 fighter resource to this card.)\n------\n(1 VP for each fighter resource on this card.)\nVP: 1/Fighter Resource"},
"SelfSufficientSettlement":{cardNum:"P29",type:"prel",tags:["city","building"],resources:{city:1},prod:{mc:2},color:"green"},
"SFMemorial":{cardNum:"P41",type:"proj",tags:["building"], cost:7,resources:{card:1},vp:1,color:"green"},
"Shuttles":{cardNum:"166",type:"proj",tags:["space"], cost:10,prod:{energy:-1,mc:2},req:{o2:5},vp:1,discount:{space:2},color:"blue"},
"SmallAnimals":{cardNum:"054",type:"proj",tags:["animal"],cost:6,req:{o2:6},reduce:{plant:1},color:"blue",cardExtra:"-> Animal Resource\n(Action: Add 1 Animal to this card.)\n------\n\n(Requires 6% oxygen. Decrease any plant production 1 step. 1 VP per 2 Animals on this card.)\nVP: 1/2 Animal Resource"},
"SmeltingPlant":{cardNum:"P30",type:"prel",tags:["building"], resources:{o2:2,steel:5},color:"green"},
"SocietySupport":{cardNum:"P31",type:"prel",prod:{mc:-1,plant:1,energy:1,heat:1},color:"green"},
"SoilFactory":{cardNum:"179",type:"proj",tags:["building"], cost:9,prod:{energy:-1,plant:1},vp:1,color:"green"},
"SolarPower":{cardNum:"113",type:"proj",tags:["power","building"],cost:11,prod:{energy:1},vp:1,color:"green"},
"SolarWindPower":{cardNum:"077",type:"proj",tags:["science","space","power"],cost:11,resources:{ti:2},prod:{energy:1},color:"green"},
"Soletta":{cardNum:"203",type:"proj",tags:["space"], cost:35,prod:{heat:7},color:"green"},
"SpaceElevator":{cardNum:"013",type:"proj",tags:["space","building"],cost:27,prod:{ti:1},vp:2,color:"blue",cardExtra:"steel -> 5 mc\n(Action: Spend 1 steel to gain 5 mc.)\n"},
"SpaceHotels":{cardNum:"P42",type:"proj",tags:["earth","space"],cost:12,prod:{mc:4},req:{earth:2},color:"green"},
"SpaceMirrors":{cardNum:"076",type:"proj",tags:["power","space"],cost:3,prod:{energy:1},color:"blue",cardExtra:"7 mc -> (Action: Spend 7 mc to increase your energy production 1 step.)"},
"SpaceStation":{cardNum:"025",type:"proj",tags:["space"], cost:10,vp:1,discount:{space:2},color:"blue"},
"SpecialDesign":{cardNum:"206",type:"proj",tags:["science","event"],cost:4,color:"red",cardExtra:"Requirement: O2/Ocean/Temperature: +/-2\n(The next card you play this generation is +2 or -2 in global requirements, your choice.)"},
"Sponsors":{cardNum:"068",type:"proj",tags:["earth"],cost:6,prod:{mc:2},color:"green"},
"StandardTechnology":{cardNum:"156",type:"proj",tags:["science"], cost:6,color:"blue",cardExtra:"Standard Projects: 3 mc\n(Effect: After you pay for a standard project, except selling patents, you gain 3 mc.)"},
"Steelworks":{cardNum:"103",type:"proj",tags:["building"], cost:15,color:"blue",cardExtra:"4 energy -> steel steel O2\n(Action: Spend 4 energy to gain 2 steel and increase oxygen 1 step.)"},
"StripMine":{cardNum:"138",type:"proj",tags:["building"], cost:25,resources:{o2:2},prod:{energy:-2,steel:2,ti:1},color:"green"},
"SubterraneanReservoir":{cardNum:"127",type:"proj",tags:["event"],cost:11,resources:{ocean:1},color:"red"},
"Supplier":{cardNum:"P32",type:"prel",tags:["power"], resources:{steel:4},prod:{energy:2},color:"green"},
"SupplyDrop":{cardNum:"P33",type:"prel",resources:{ti:3,steel:8,plant:3},color:"green"},
"SymbioticFungus":{cardNum:"133",type:"proj",tags:["microbe"],cost:4,req:{"temp":-14},color:"blue",cardExtra:"-> Microbe* Resource\n(Action: Add a Microbe to ANOTHER card.)\n"},
"Tardigrades":{cardNum:"049",type:"proj",tags:["microbe"],cost:4,color:"blue",cardExtra:"-> Microbe Resource\n(Action: Add 1 Microbe to this card.)\n------\n(1 VP per 4 Microbes on this card.)\nVP: 1/4 Microbe Resource)"},
"TechnologyDemonstration":{cardNum:"204",type:"proj",tags:["science","space","event"],cost:5,resources:{card:2},color:"red"},
"TectonicStressPower":{cardNum:"145",type:"proj",tags:["power","building"],cost:18,prod:{energy:3},req:{science:2},vp:1,color:"green"},
"Teractor":{cardNum:"Z11",type:"corp",tags:["earth"],resources:{mc:60},discount:{earth:3},color:"blue"},
"TerraformingGanymede":{cardNum:"197",type:"proj",tags:["jovian","space"],cost:33,vp:2,color:"green",cardExtra:"TR/Jovian\n(Raise your TR 1 step for each Jovian tag you have, including this.)\n"},
"TharsisRepublic":{cardNum:"Z08",type:"corp",tags:["building"], resources:{mc:40,city:1},color:"blue",cardExtra:"Effect:\nany-City*: mc:1\nCity: 3 mc\n(Effect: Whenever any city tile is placed ON MARS, increase your mc production 1 step. When you place a city tile, gain 3 mc.)\n-- Ed. note: Some printings don't have the word \"corporation\" at the top of this card. This is a misprint."},
"Thorgate":{cardNum:"Z09",type:"corp",tags:["power"], resources:{mc:48},prod:{energy:1},discount:{power:3},color:"blue",cardExtra:"Effect:\n(Effect: When playing a power card OR THE STANDARD PROJECT POWER plant, you pay 6 it."},
"TitaniumMine":{cardNum:"144",type:"proj",tags:["building"], cost:7,prod:{ti:1},color:"green"},
"TollStation":{cardNum:"099",type:"proj",tags:["space"], cost:12,color:"green",cardExtra:"Increase 1 mc/Space*\n(Increase your mc production 1 step for each Space tag OPPONENTS have.)"},
"TowingAComet":{cardNum:"075",type:"proj",tags:["space","event"],cost:23,resources:{ocean:1,o2:1,plant:2},color:"red"},
"TransNeptuneProbe":{cardNum:"084",type:"proj",tags:["science","space"],cost:6,vp:1,color:"green"},
"Trees":{cardNum:"060",type:"proj",tags:["plant"],cost:13,resources:{plant:1},prod:{plant:3},req:{"temp":-4},vp:1,color:"green"},
"TropicalResort":{cardNum:"098",type:"proj",tags:["building"], cost:13,prod:{mc:3,"heat":-2},vp:2,color:"green"},
"TundraFarming":{cardNum:"169",type:"proj",tags:["plant"],cost:16,resources:{plant:1},prod:{mc:2,plant:1},req:{"temp":-6},vp:2,color:"green"},
"UndergroundCity":{cardNum:"032",type:"proj",tags:["city","building"],cost:18,resources:{city:1},prod:{energy:-2,steel:2},color:"green"},
"UndergroundDetonations":{cardNum:"202",type:"proj",tags:["building"], cost:6,color:"green",cardExtra:"10 mc -> 2 heat Production"},
"UnitedNationsMarsInitiative":{cardNum:"Z10",type:"corp",tags:["earth"],resources:{mc:40},color:"blue",cardExtra:"Action:\n3 mc -> TR*\n(Action: If your Terraform Rating was raised this generations, you may pay 3 mc to raise it 1 step more.)"},
"UNMIContractor":{cardNum:"P34",type:"prel",tags:["earth"],resources:{tr:3,card:1},color:"green"},
"UrbanizedArea":{cardNum:"120",type:"proj",tags:["city","building"],cost:10,prod:{energy:-1,mc:2,energy:1},color:"green",cardExtra:"City Tile*\n( Place a City tile ADJACENT TO AT LEAST 2 OTHER CITY TILES.)"},
"ValleyTrust":{cardNum:"Z21",type:"corp",tags:["earth"],resources:{mc:37,prelude:1},discount:{science:2},color:"blue",cardExtra:"As your first action, draw 3 Prelude cards, and play one of them. Discard the other two.)\n"},
"VestaShipyard":{cardNum:"057",type:"proj",tags:["jovian","space"],cost:15,prod:{ti:1},vp:1,color:"green"},
"ViralEnhancers":{cardNum:"074",type:"proj",tags:["science","microbe"],cost:9,color:"blue",cardExtra:"plant/Microbe/Animallant/Microbe*/Animal*\n(Effect: When you play a plant, Microbe, or an Animal tag, including this, gain 1 plant or add 1 resource TO THAT CARD.)"},
"Virus":{cardNum:"050",type:"proj",tags:["microbe","event"],cost:1,color:"red",cardExtra:"Remove 2 any-Animal OR -5 any-plant\n(Remove up to 2 Animals or 5 plants from any player.)"},
"Vitor":{cardNum:"Z22",type:"corp",tags:["earth"],resources:{mc:45,award:1},color:"blue",cardExtra:"Effect:\nVP: ?*: 3 mc\n(Effect: When you play a card with a NON-NEGATIVE VP icon, including this, gain 3 mc.)"},
"WaterImportFromEuropa":{cardNum:"012",type:"proj",tags:["jovian","space"],cost:25,color:"blue",cardExtra:"12 mc (ti) -> Ocean Tile\n(Action: Pay 12 mc to place an ocean tile. ti MAY BE USED as if playing a Space card.)\n------\n(1 VP for each Jovian tag you have.)\nVP: 1/Jovian"},
"WaterSplittingPlant":{cardNum:"177",type:"proj",tags:["building"], cost:12,req:{ocean:2},color:"blue",cardExtra:"energy energy energy -> O2\n(Action: Spend 3 energy to raise oxygen 1 step.)\n------\n(Requires 2 ocean tiles.)"},
"WavePower":{cardNum:"139",type:"proj",tags:["power"], cost:8,prod:{energy:1},req:{ocean:3},vp:1,color:"green"},
"Windmills":{cardNum:"168",type:"proj",tags:["power","building"],cost:6,prod:{energy:1},req:{o2:7},vp:1,color:"green"},
"Worms":{cardNum:"130",type:"proj",tags:["microbe"],cost:8,req:{o2:4},color:"green",cardExtra:"Increase plant/2 Microbe tags\n(Increase your plant production 1 step for every 2 Microbe tags you have, including this.)"},
"Zeppelins":{cardNum:"129",type:"proj",cost:13,req:{o2:5},vp:1,color:"green",cardExtra:"Increase mc/any-City*\n(Increase your mc production 1 step for each City tile ON MARS.)\n"},
};

let Resources = {
    MEGACREDITS : "megacredits",
    STEEL : "steel",
    TITANIUM : "titanium",
    PLANTS : "plants",
    ENERGY : "energy",
    HEAT : "heat",
    };

oAllCards.AcquiredCompany.play = function (player) {
        player.addProduction(Resources.MEGACREDITS, 3);
        return undefined;
};



oAllCards.AdaptationTechnology.getRequirementBonus = function () {
    return 2;
};
oAllCards.AdaptationTechnology.play = function () {
    return undefined;
};
oAllCards.AdaptationTechnology.getVictoryPoints = function () {
    return 1;
};

oAllCards.AdaptedLichen.play = function (player) {
        player.addProduction(Resources.PLANTS);
        return undefined;
};

oAllCards.AdvancedAlloys.play = function (player) {
        player.increaseTitaniumValue();
        player.increaseSteelValue();
        return undefined;
};


oAllCards.AdvancedEcosystems.canPlay = function (player) {
    return player.checkMultipleTagPresence([Tags.PLANT, Tags.ANIMAL, Tags.MICROBE]);
};
oAllCards.AdvancedEcosystems.play = function () {
    return undefined;
};
oAllCards.AdvancedEcosystems.getVictoryPoints = function () {
    return 3;
};

oAllCards.AerobrakedAmmoniaAsteroid.play = function (player, game) {
    var cardsToPick = player.getResourceCards(ResourceType.MICROBE);
    player.addProduction(Resources.HEAT, 3);
    player.addProduction(Resources.PLANTS);
    if (cardsToPick.length < 1)
        return undefined;
    if (cardsToPick.length === 1) {
        player.addResourceTo(cardsToPick[0], 2);
        LogHelper.logAddResource(game, player, cardsToPick[0], 2);
        return undefined;
    }
    return new SelectCard('Select card to add 2 microbes', 'Add microbes', cardsToPick, function (foundCards) {
        player.addResourceTo(foundCards[0], 2);
        LogHelper.logAddResource(game, player, foundCards[0], 2);
        return undefined;
    });
};


oAllCards.AICentral.canPlay = function (player) {
    return player.getTagCount(Tags.SCIENCE) >= 3 && player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.AICentral.play = function (player) {
    player.addProduction(Resources.ENERGY, -1);
    return undefined;
};
oAllCards.AICentral.canAct = function () {
    return true;
};
oAllCards.AICentral.getVictoryPoints = function () {
    return 1;
};
oAllCards.AICentral.action = function (player, game) {
    player.cardsInHand.push(game.dealer.dealCard(), game.dealer.dealCard());
    return undefined;
};


oAllCards.Algae.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OCEANS, 5);
};
oAllCards.Algae.play = function (player) {
    player.plants++;
    player.addProduction(Resources.PLANTS, 2);
    return undefined;
};


oAllCards.AntiGravityTechnology.canPlay = function (player) {
    return player.getTagCount(Tags.SCIENCE) >= 7;
};
oAllCards.AntiGravityTechnology.getCardDiscount = function () {
    return 2;
};
oAllCards.AntiGravityTechnology.play = function () {
    return undefined;
};
oAllCards.AntiGravityTechnology.getVictoryPoints = function () {
    return 3;
};


oAllCards.Ants.resourceType = ResourceType.MICROBE;
oAllCards.Ants.resourceCount = 0;
oAllCards.Ants.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 4);
};
oAllCards.Ants.getVictoryPoints = function () {
    return Math.floor(this.resourceCount / 2);
};
oAllCards.Ants.play = function () {
    return undefined;
};
oAllCards.Ants.canAct = function (player, game) {
    if (game.isSoloMode())
        return true;
    return RemoveResourcesFromCard.getAvailableTargetCards(player, game, this.resourceType).length > 0;
};
oAllCards.Ants.action = function (player, game) {
    var _this = this;
    game.defer(new RemoveResourcesFromCard(player, game, ResourceType.MICROBE));
    game.defer(new DeferredAction(player, function () {
        player.addResourceTo(_this);
        return undefined;
    }));
    return undefined;
};


oAllCards.AquiferPumping.play = function () {
    return undefined;
};
oAllCards.AquiferPumping.canAct = function (player, game) {
    var oceansMaxed = game.board.getOceansOnBoard() === MAX_OCEAN_TILES;
    var oceanCost = 8;
    if (oceansMaxed)
        return player.canAfford(oceanCost, game, true, false);
    return player.canAfford(oceanCost, game, true, false);
};
oAllCards.AquiferPumping.action = function (player, game) {
    game.defer(new SelectHowToPayDeferred(player, 8, true, false, 'Select how to pay for action'));
    game.defer(new PlaceOceanTile(player, game));
    return undefined;
};


oAllCards.ArchaeBacteria.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.TEMPERATURE, -18);
};
oAllCards.ArchaeBacteria.play = function (player) {
    player.addProduction(Resources.PLANTS);
    return undefined;
};


oAllCards.ArcticAlgae.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.TEMPERATURE, -12);
};
oAllCards.ArcticAlgae.onTilePlaced = function (player, space) {
    if (space.tile !== undefined && space.tile.tileType === TileType.OCEAN) {
        player.plants += 2;
    }
};
oAllCards.ArcticAlgae.play = function (player) {
    player.plants++;
    return undefined;
};


oAllCards.ArtificialLake.canPlay = function (player, game) {
    var meetsTemperatureRequirements = game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -6);
    return meetsTemperatureRequirements;
};
oAllCards.ArtificialLake.play = function (player, game) {
    if (game.board.getOceansOnBoard() >= MAX_OCEAN_TILES)
        return undefined;
    return new SelectSpace('Select a land space to place an ocean', game.board.getAvailableSpacesOnLand(player), function (foundSpace) {
        game.addOceanTile(player, foundSpace.id, SpaceType.LAND);
        return undefined;
    });
};
oAllCards.ArtificialLake.getVictoryPoints = function () {
    return 1;
};

oAllCards.ArtificialPhotosynthesis.play = function (player) {
    return new OrOptions(new SelectOption('Increase your energy production 2 steps', 'Increase', function () {
        player.addProduction(Resources.ENERGY, 2);
        return undefined;
    }), new SelectOption('Increase your plant production 1 step', 'Increase', function () {
        player.addProduction(Resources.PLANTS);
        return undefined;
    }));
};

oAllCards.Asteroid.play = function (player, game) {
    game.increaseTemperature(player, 1);
    game.defer(new RemoveAnyPlants(player, game, 3));
    player.titanium += 2;
    return undefined;
};


oAllCards.AsteroidMiningConsortium.canPlay = function (player) {
    return player.getProduction(Resources.TITANIUM) >= 1;
};
oAllCards.AsteroidMiningConsortium.play = function (player, game) {
    game.defer(new DecreaseAnyProduction(player, game, Resources.TITANIUM, 1));
    player.addProduction(Resources.TITANIUM);
    return undefined;
};
oAllCards.AsteroidMiningConsortium.getVictoryPoints = function () {
    return 1;
};


oAllCards.AsteroidMining.play = function (player) {
    player.addProduction(Resources.TITANIUM, 2);
    return undefined;
};
oAllCards.AsteroidMining.getVictoryPoints = function () {
    return 2;
};


oAllCards.BeamFromAThoriumAsteroid.canPlay = function (player) {
    return player.getTagCount(Tags.JOVIAN) >= 1;
};
oAllCards.BeamFromAThoriumAsteroid.play = function (player) {
    player.addProduction(Resources.HEAT, 3);
    player.addProduction(Resources.ENERGY, 3);
    return undefined;
};
oAllCards.BeamFromAThoriumAsteroid.getVictoryPoints = function () {
    return 1;
};

oAllCards.BigAsteroid.play = function (player, game) {
    game.increaseTemperature(player, 2);
    game.defer(new RemoveAnyPlants(player, game, 4));
    player.titanium += 4;
    return undefined;
};


oAllCards.BiomassCombustors.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 6) && game.someoneHasResourceProduction(Resources.PLANTS, 1);
};
oAllCards.BiomassCombustors.play = function (player, game) {
    player.addProduction(Resources.ENERGY, 2);
    game.defer(new DecreaseAnyProduction(player, game, Resources.PLANTS, 1));
    return undefined;
};
oAllCards.BiomassCombustors.getVictoryPoints = function () {
    return -1;
};


oAllCards.Birds.resourceType = ResourceType.ANIMAL,
oAllCards.Birds.resourceCount = 0;
oAllCards.Birds.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 13) && game.someoneHasResourceProduction(Resources.PLANTS, 2);
};
oAllCards.Birds.getVictoryPoints = function () {
    return this.resourceCount;
};
oAllCards.Birds.play = function (player, game) {
    game.defer(new DecreaseAnyProduction(player, game, Resources.PLANTS, 2));
    return undefined;
};
oAllCards.Birds.canAct = function () {
    return true;
};
oAllCards.Birds.action = function (player) {
    player.addResourceTo(this);
    return undefined;
};


oAllCards.BlackPolarDust.canPlay = function (player, game) {
    var meetsMcProdRequirement = player.getProduction(Resources.MEGACREDITS) >= -3;
    return meetsMcProdRequirement;
};
oAllCards.BlackPolarDust.play = function (player, game) {
    player.addProduction(Resources.MEGACREDITS, -2);
    player.addProduction(Resources.HEAT, 3);
    game.defer(new PlaceOceanTile(player, game));
    return undefined;
};


oAllCards.BreathingFilters.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 7);
};
oAllCards.BreathingFilters.play = function () {
    return undefined;
};
oAllCards.BreathingFilters.getVictoryPoints = function () {
    return 2;
};


oAllCards.BribedCommittee.play = function (player, game) {
    player.increaseTerraformRatingSteps(2, game);
    return undefined;
};
oAllCards.BribedCommittee.getVictoryPoints = function () {
    return -2;
};


oAllCards.BuildingIndustries.canPlay = function (player) {
    return player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.BuildingIndustries.play = function (player) {
    player.addProduction(Resources.ENERGY, -1);
    player.addProduction(Resources.STEEL, 2);
    return undefined;
};


oAllCards.Bushes.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -10);
};
oAllCards.Bushes.play = function (player) {
    player.addProduction(Resources.PLANTS, 2);
    player.plants += 2;
    return undefined;
};


oAllCards.BusinessContacts.play = function (player, game) {
    var cards = [
        game.dealer.dealCard(),
        game.dealer.dealCard(),
        game.dealer.dealCard(),
        game.dealer.dealCard(),
    ];
    return new SelectCard('Select cards to keep of top 4 cards from deck', 'Keep', cards, function (found) {
        player.cardsInHand.push(found[0], found[1]);
        cards.forEach(function (card) {
            if (found.find(function (f) { return f.name === card.name; }) === undefined) {
                game.dealer.discard(card);
            }
        });
        return undefined;
    }, 2, 2);
};


oAllCards.BusinessNetwork.canPlay = function (player) {
    return player.getProduction(Resources.MEGACREDITS) >= -4;
};
oAllCards.BusinessNetwork.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, -1);
    return undefined;
};
oAllCards.BusinessNetwork.canAct = function () {
    return true;
};
oAllCards.BusinessNetwork.action = function (player, game) {
    var dealtCard = game.dealer.dealCard();
    var canSelectCard = player.canAfford(player.cardCost);
    return new SelectCard(canSelectCard ? 'Select card to keep or none to discard' : 'You cannot pay for this card', canSelectCard ? 'Select' : undefined, [dealtCard], function (cards) {
        if (cards.length === 0 || !canSelectCard) {
            LogHelper.logCardChange(game, player, 'discarded', 1);
            game.dealer.discard(dealtCard);
            return undefined;
        }
        LogHelper.logCardChange(game, player, 'drew', 1);
        player.cardsInHand.push(dealtCard);
        game.defer(new SelectHowToPayDeferred(player, player.cardCost, false, false, 'Select how to pay for action'));
        return undefined;
    }, canSelectCard ? 1 : 0, 0);
};


oAllCards.CallistoPenalMines.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 3);
    return undefined;
};
oAllCards.CallistoPenalMines.getVictoryPoints = function () {
    return 2;
};


oAllCards.Capital.canPlay = function (player, game) {
    return player.getProduction(Resources.ENERGY) >= 2 &&
        game.checkMinRequirements(player, GlobalParameter.OCEANS, 4) &&
        game.board.getAvailableSpacesForCity(player).length > 0;
};
oAllCards.Capital.getVictoryPoints = function (_player, game) {
    var usedSpace = game.board.getSpaceByTileCard(this.name);
    if (usedSpace !== undefined) {
        return game.board.getAdjacentSpaces(usedSpace)
            .filter(function (s) { return Board.isOceanSpace(s); }).length;
    }
    return 0;
};
oAllCards.Capital.play = function (player, game) {
    var _this = this;
    player.addProduction(Resources.ENERGY, -2);
    player.addProduction(Resources.MEGACREDITS, 5);
    return new SelectSpace('Select space for special city tile', game.board.getAvailableSpacesForCity(player), function (space) {
        game.addTile(player, SpaceType.LAND, space, {
            tileType: TileType.CAPITAL,
            card: _this.name,
        });
        space.adjacency = _this.adjacencyBonus;
        return undefined;
    });
};


oAllCards.CarbonateProcessing.canPlay = function (player) {
    return player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.CarbonateProcessing.play = function (player) {
    player.addProduction(Resources.ENERGY, -1);
    player.addProduction(Resources.HEAT, 3);
    return undefined;
};


oAllCards.CaretakerContract.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, 0);
};
oAllCards.CaretakerContract.play = function () {
    return undefined;
};
oAllCards.CaretakerContract.canAct = function (player, game) {
    var hasEnoughHeat = player.heat >= 8 || (player.isCorporation(CardName.STORMCRAFT_INCORPORATED) && (player.getResourcesOnCorporation() * 2) + player.heat >= 8);
    return hasEnoughHeat;
};
oAllCards.CaretakerContract.action = function (player, game) {
    if (player.isCorporation(CardName.STORMCRAFT_INCORPORATED) && player.getResourcesOnCorporation() > 0) {
        var heatAmount_1;
        var floaterAmount_1;
        return new AndOptions(function () {
            if (heatAmount_1 +
                (floaterAmount_1 * 2) < 8) {
                throw new Error('Need to pay 8 heat');
            }
            player.removeResourceFrom(player.corporationCard, floaterAmount_1);
            player.heat -= heatAmount_1;
            player.increaseTerraformRating(game);
            return undefined;
        }, new SelectAmount('Select amount of heat to spend', 'Spend heat', function (amount) {
            heatAmount_1 = amount;
            return undefined;
        }, 0, player.heat), new SelectAmount('Select amount of floaters on corporation to spend', 'Spend floaters', function (amount) {
            floaterAmount_1 = amount;
            return undefined;
        }, 0, player.getResourcesOnCorporation()));
    }
    player.heat -= 8;
    player.increaseTerraformRating(game);
    return undefined;
};

oAllCards.Cartel.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, player.getTagCount(Tags.EARTH) + 1);
    return undefined;
};


oAllCards.CEOsFavoriteProject.canPlay = function (player) {
    return player.getCardsWithResources().length > 0;
};
oAllCards.CEOsFavoriteProject.play = function (player, game) {
    return new SelectCard('Select card to add resource', 'Add resource', player.getCardsWithResources(), function (foundCards) {
        player.addResourceTo(foundCards[0]);
        LogHelper.logAddResource(game, player, foundCards[0]);
        return undefined;
    });
};


oAllCards.CloudSeeding.canPlay = function (player, game) {
    return player.getProduction(Resources.MEGACREDITS) > -5 &&
        game.checkMinRequirements(player, GlobalParameter.OCEANS, 3) &&
        game.someoneHasResourceProduction(Resources.HEAT, 1);
};
oAllCards.CloudSeeding.play = function (player, game) {
    game.defer(new DecreaseAnyProduction(player, game, Resources.HEAT, 1));
    player.addProduction(Resources.MEGACREDITS, -1);
    player.addProduction(Resources.PLANTS, 2);
    return undefined;
};

oAllCards.ColonizerTrainingCamp.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.OXYGEN, 5);
};
oAllCards.ColonizerTrainingCamp.play = function () {
    return undefined;
};
oAllCards.ColonizerTrainingCamp.getVictoryPoints = function () {
    return 2;
};

oAllCards.Comet.play = function (player, game) {
    game.increaseTemperature(player, 1);
    game.defer(new PlaceOceanTile(player, game));
    game.defer(new RemoveAnyPlants(player, game, 3));
    return undefined;
};

oAllCards.CommercialDistrict.canPlay = function (player, game) {
    return player.getProduction(Resources.ENERGY) >= 1 &&
        game.board.getAvailableSpacesOnLand(player).length > 0;
};
oAllCards.CommercialDistrict.getVictoryPoints = function (_player, game) {
    var usedSpace = game.board.getSpaceByTileCard(this.name);
    if (usedSpace !== undefined) {
        return game.board.getAdjacentSpaces(usedSpace).filter(function (adjacentSpace) { return Board.isCitySpace(adjacentSpace); }).length;
    }
    return 0;
};
oAllCards.CommercialDistrict.play = function (player, game) {
    var _this = this;
    return new SelectSpace('Select space for special tile', game.board.getAvailableSpacesOnLand(player), function (foundSpace) {
        game.addTile(player, foundSpace.spaceType, foundSpace, {
            tileType: TileType.COMMERCIAL_DISTRICT,
            card: _this.name,
        });
        foundSpace.adjacency = _this.adjacencyBonus;
        player.addProduction(Resources.ENERGY, -1);
        player.addProduction(Resources.MEGACREDITS, 4);
        return undefined;
    });
};

oAllCards.ConvoyFromEuropa.play = function (player, game) {
    player.cardsInHand.push(game.dealer.dealCard());
    game.defer(new PlaceOceanTile(player, game));
    return undefined;
};

oAllCards.CorporateStronghold.canPlay = function (player, game) {
    return player.getProduction(Resources.ENERGY) >= 1 &&
        game.board.getAvailableSpacesForCity(player).length > 0;
};
oAllCards.CorporateStronghold.play = function (player, game) {
    return new SelectSpace('Select space for city tile', game.board.getAvailableSpacesForCity(player), function (space) {
        game.addCityTile(player, space.id);
        player.addProduction(Resources.ENERGY, -1);
        player.addProduction(Resources.MEGACREDITS, 3);
        return undefined;
    });
};
oAllCards.CorporateStronghold.getVictoryPoints = function () {
    return -2;
};

oAllCards.CupolaCity.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.OXYGEN, 9) &&
        player.getProduction(Resources.ENERGY) >= 1 &&
        game.board.getAvailableSpacesForCity(player).length > 0;
};
oAllCards.CupolaCity.play = function (player, game) {
    return new SelectSpace('Select a space for city tile', game.board.getAvailableSpacesForCity(player), function (space) {
        game.addCityTile(player, space.id);
        player.addProduction(Resources.ENERGY, -1);
        player.addProduction(Resources.MEGACREDITS, 3);
        return undefined;
    });
};

oAllCards.Decomposers.resourceType = ResourceType.MICROBE,
oAllCards.Decomposers.resourceCount = 0;
oAllCards.Decomposers.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 3);
};
oAllCards.Decomposers.onCardPlayed = function (player, _game, card) {
    player.addResourceTo(this, card.tags.filter(function (tag) { return tag === Tags.ANIMAL || tag === Tags.PLANT || tag === Tags.MICROBE; }).length);
};
oAllCards.Decomposers.getVictoryPoints = function () {
    return Math.floor(this.resourceCount / 3);
};
oAllCards.Decomposers.play = function () {
    return undefined;
};

oAllCards.DeepWellHeating.play = function (player, game) {
    player.addProduction(Resources.ENERGY);
    return game.increaseTemperature(player, 1);
};

oAllCards.DeimosDown.play = function (player, game) {
    game.increaseTemperature(player, 3);
    game.defer(new RemoveAnyPlants(player, game, 8));
    player.steel += 4;
    return undefined;
};

oAllCards.DesignedMicroOrganisms.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.TEMPERATURE, -14);
};
oAllCards.DesignedMicroOrganisms.play = function (player) {
    player.addProduction(Resources.PLANTS, 2);
    return undefined;
};

oAllCards.DevelopmentCenter.play = function () {
    return undefined;
};
oAllCards.DevelopmentCenter.canAct = function (player) {
    return player.energy > 0;
};
oAllCards.DevelopmentCenter.action = function (player, game) {
    player.energy--;
    player.cardsInHand.push(game.dealer.dealCard());
    return undefined;
};

oAllCards.DomedCrater.canPlay = function (player, game) {
    return player.getProduction(Resources.ENERGY) >= 1 &&
        game.checkMaxRequirements(player, GlobalParameter.OXYGEN, 7) &&
        game.board.getAvailableSpacesForCity(player).length > 0;
};
oAllCards.DomedCrater.play = function (player, game) {
    return new SelectSpace('Select space for city tile', game.board.getAvailableSpacesForCity(player), function (space) {
        game.addCityTile(player, space.id);
        player.plants += 3;
        player.addProduction(Resources.ENERGY, -1);
        player.addProduction(Resources.MEGACREDITS, 3);
        return undefined;
    });
};
oAllCards.DomedCrater.getVictoryPoints = function () {
    return 1;
};

oAllCards.DustSeals.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.OCEANS, 3);
};
oAllCards.DustSeals.play = function () {
    return undefined;
};
oAllCards.DustSeals.getVictoryPoints = function () {
    return 1;
};

oAllCards.EarthCatapult.getCardDiscount = function () {
    return 2;
};
oAllCards.EarthCatapult.play = function () {
    return undefined;
};
oAllCards.EarthCatapult.getVictoryPoints = function () {
    return 2;
};

oAllCards.EarthOffice.getCardDiscount = function (_player, _game, card) {
    return card.tags.filter(function (tag) { return tag === Tags.EARTH; }).length * 3;
};
oAllCards.EarthOffice.play = function () {
    return undefined;
};

oAllCards.EcologicalZone.resourceType = ResourceType.ANIMAL,
oAllCards.EcologicalZone.resourceCount = 0;
oAllCards.EcologicalZone.getAvailableSpaces = function (player, game) {
    return game.board.getAvailableSpacesOnLand(player)
        .filter(function (space) { return game.board.getAdjacentSpaces(space).filter(function (adjacentSpace) { return adjacentSpace.tile !== undefined &&
        adjacentSpace.tile.tileType === TileType.GREENERY; }).length > 0; });
};
oAllCards.EcologicalZone.hasGreeneryTile = function (player, game) {
    return game.board.getSpaces(SpaceType.OCEAN, player)
        .concat(game.board.getSpaces(SpaceType.LAND, player))
        .filter(function (space) { return space.tile !== undefined &&
        space.tile.tileType === TileType.GREENERY &&
        space.player === player; }).length > 0;
};
oAllCards.EcologicalZone.canPlay = function (player, game) {
    var hasGreenery = this.hasGreeneryTile(player, game);
    var canPlaceTile = this.getAvailableSpaces(player, game).length > 0;
    return hasGreenery && canPlaceTile;
};
oAllCards.EcologicalZone.onCardPlayed = function (player, _game, card) {
    player.addResourceTo(this, card.tags.filter(function (tag) { return tag === Tags.ANIMAL || tag === Tags.PLANT; }).length);
};
oAllCards.EcologicalZone.getVictoryPoints = function () {
    return Math.floor(this.resourceCount / 2);
};
oAllCards.EcologicalZone.play = function (player, game) {
    var _this = this;
    return new SelectSpace('Select space next to greenery for special tile', this.getAvailableSpaces(player, game), function (requestedSpace) {
        game.addTile(player, requestedSpace.spaceType, requestedSpace, {
            tileType: TileType.ECOLOGICAL_ZONE,
        });
        requestedSpace.adjacency = _this.adjacencyBonus;
        return undefined;
    });
};

oAllCards.ElectroCatapult.canPlay = function (player, game) {
    return player.getProduction(Resources.ENERGY) >= 1 &&
        game.checkMaxRequirements(player, GlobalParameter.OXYGEN, 8);
};
oAllCards.ElectroCatapult.canAct = function (player) {
    return player.plants > 0 || player.steel > 0;
};
oAllCards.ElectroCatapult.action = function (player, game) {
    var _this = this;
    if (player.plants > 0 && player.steel > 0) {
        return new OrOptions(new SelectOption('Spend 1 plant to gain 7 mega credit', 'Spend plant', function () {
            player.plants--;
            player.megaCredits += 7;
            _this.log(game, player, Resources.PLANTS);
            return undefined;
        }), new SelectOption('Spend 1 steel to gain 7 mega credit', 'Spend steel', function () {
            player.steel--;
            player.megaCredits += 7;
            _this.log(game, player, Resources.STEEL);
            return undefined;
        }));
    }
    else if (player.plants > 0) {
        player.plants--;
        this.log(game, player, Resources.PLANTS);
        player.megaCredits += 7;
    }
    else if (player.steel > 0) {
        player.steel--;
        this.log(game, player, Resources.STEEL);
        player.megaCredits += 7;
    }
    return undefined;
};
oAllCards.ElectroCatapult.play = function (player) {
    player.addProduction(Resources.ENERGY, -1);
    return undefined;
};
oAllCards.ElectroCatapult.getVictoryPoints = function () {
    return 1;
};
oAllCards.ElectroCatapult.log = function (game, player, resource) {
    game.log('${0} spent 1 ${1} to gain 7 MC', function (b) { return b.player(player).string(resource); });
};

oAllCards.EnergySaving.play = function (player, game) {
    player.addProduction(Resources.ENERGY, game.getCitiesInPlay());
    return undefined;
};

oAllCards.EnergyTapping.play = function (player, game) {
    player.addProduction(Resources.ENERGY);
    game.defer(new DecreaseAnyProduction(player, game, Resources.ENERGY, 1));
    return undefined;
};
oAllCards.EnergyTapping.getVictoryPoints = function () {
    return -1;
};

oAllCards.EosChasmaNationalPark.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -12);
};
oAllCards.EosChasmaNationalPark.play = function (player, game) {
    var cards = player.getResourceCards(ResourceType.ANIMAL);
    player.plants += 3;
    player.addProduction(Resources.MEGACREDITS, 2);
    if (cards.length < 1)
        return undefined;
    if (cards.length === 1) {
        player.addResourceTo(cards[0], 1);
        LogHelper.logAddResource(game, player, cards[0]);
        return undefined;
    }
    return new SelectCard('Add 1 animal to a card', 'Add animal', cards, function (foundCards) {
        player.addResourceTo(foundCards[0], 1);
        LogHelper.logAddResource(game, player, foundCards[0]);
        return undefined;
    });
};
oAllCards.EosChasmaNationalPark.getVictoryPoints = function () {
    return 1;
};

oAllCards.EquatorialMagnetizer.play = function () {
    return undefined;
};
oAllCards.EquatorialMagnetizer.canAct = function (player, game) {
    var hasEnergyProduction = player.getProduction(Resources.ENERGY) >= 1;
    return hasEnergyProduction;
};
oAllCards.EquatorialMagnetizer.action = function (player, game) {
    player.addProduction(Resources.ENERGY, -1);
    player.increaseTerraformRating(game);
    return undefined;
};

oAllCards.ExtremeColdFungus.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.TEMPERATURE, -10);
};
oAllCards.ExtremeColdFungus.play = function () {
    return undefined;
};
oAllCards.ExtremeColdFungus.canAct = function () {
    return true;
};
oAllCards.ExtremeColdFungus.action = function (player, game) {
    var otherMicrobeCards = player.getResourceCards(ResourceType.MICROBE);
    if (otherMicrobeCards.length === 0) {
        player.plants++;
        LogHelper.logGainStandardResource(game, player, Resources.PLANTS);
        return undefined;
    }
    var gainPlantOption = new SelectOption('Gain 1 plant', 'Gain plant', function () {
        player.plants++;
        LogHelper.logGainStandardResource(game, player, Resources.PLANTS);
        return undefined;
    });
    if (otherMicrobeCards.length === 1) {
        var targetCard_1 = otherMicrobeCards[0];
        return new OrOptions(new SelectOption('Add 2 microbes to ' + name, 'Add microbes', function () {
            player.addResourceTo(targetCard_1, 2);
            LogHelper.logAddResource(game, player, targetCard_1, 2);
            return undefined;
        }), gainPlantOption);
    }
    return new OrOptions(new SelectCard('Select card to add 2 microbes', 'Add microbes', otherMicrobeCards, function (foundCards) {
        player.addResourceTo(foundCards[0], 2);
        LogHelper.logAddResource(game, player, foundCards[0], 2);
        return undefined;
    }), gainPlantOption);
};

oAllCards.Farming.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, 4);
};
oAllCards.Farming.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 2);
    player.addProduction(Resources.PLANTS, 2);
    player.plants += 2;
    return undefined;
};
oAllCards.Farming.getVictoryPoints = function () {
    return 2;
};

oAllCards.Fish.resourceType = ResourceType.ANIMAL,
oAllCards.Fish.resourceCount = 0;
oAllCards.Fish.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, 2) && game.someoneHasResourceProduction(Resources.PLANTS, 1);
};
oAllCards.Fish.getVictoryPoints = function () {
    return this.resourceCount;
};
oAllCards.Fish.play = function (player, game) {
    game.defer(new DecreaseAnyProduction(player, game, Resources.PLANTS, 1));
    return undefined;
};
oAllCards.Fish.canAct = function () {
    return true;
};
oAllCards.Fish.action = function (player) {
    player.addResourceTo(this);
    return undefined;
};

oAllCards.Flooding.play = function (player, game) {
    if (game.isSoloMode()) {
        game.defer(new PlaceOceanTile(player, game));
        return undefined;
    }
    return new SelectSpace('Select space for ocean tile', game.board.getAvailableSpacesForOcean(player), function (space) {
        var adjacentPlayers = new Set();
        game.addOceanTile(player, space.id);
        game.board.getAdjacentSpaces(space).forEach(function (space) {
            if (space.player && space.player !== player && space.tile) {
                adjacentPlayers.add(space.player);
            }
        });
        if (adjacentPlayers.size > 0) {
            return new OrOptions(new SelectPlayer(Array.from(adjacentPlayers), 'Select adjacent player to remove 4 mega credits from', 'Remove credits', function (selectedPlayer) {
                selectedPlayer.setResource(Resources.MEGACREDITS, -4, game, player);
                return undefined;
            }), new SelectOption('Don\'t remove mega credits from adjacent player', 'Confirm', function () {
                return undefined;
            }));
        }
        return undefined;
    });
};
oAllCards.Flooding.getVictoryPoints = function () {
    return -1;
};

oAllCards.FoodFactory.canPlay = function (player) {
    return player.getProduction(Resources.PLANTS) >= 1;
};
oAllCards.FoodFactory.play = function (player) {
    player.addProduction(Resources.PLANTS, -1);
    player.addProduction(Resources.MEGACREDITS, 4);
    return undefined;
};
oAllCards.FoodFactory.getVictoryPoints = function () {
    return 1;
};

oAllCards.FueledGenerators.canPlay = function (player) {
    return player.getProduction(Resources.MEGACREDITS) >= -4;
};
oAllCards.FueledGenerators.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, -1);
    player.addProduction(Resources.ENERGY);
    return undefined;
};

oAllCards.FuelFactory.canPlay = function (player) {
    return player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.FuelFactory.play = function (player) {
    player.addProduction(Resources.ENERGY, -1);
    player.addProduction(Resources.TITANIUM);
    player.addProduction(Resources.MEGACREDITS);
    return undefined;
};

oAllCards.FusionPower.canPlay = function (player) {
    return player.getTagCount(Tags.ENERGY) >= 2;
};
oAllCards.FusionPower.play = function (player) {
    player.addProduction(Resources.ENERGY, 3);
    return undefined;
};

oAllCards.GanymedeColony.getVictoryPoints = function (player) {
    return player.getTagCount(Tags.JOVIAN, false, false);
};
oAllCards.GanymedeColony.play = function (player, game) {
    game.addCityTile(player, SpaceName.GANYMEDE_COLONY, SpaceType.COLONY);
    return undefined;
};

oAllCards.GeneRepair.canPlay = function (player) {
    return player.getTagCount(Tags.SCIENCE) >= 3;
};
oAllCards.GeneRepair.play = function (player, _game) {
    if (player.getTagCount(Tags.SCIENCE) < 3) {
        throw 'Requires 3 science tags.';
    }
    player.addProduction(Resources.MEGACREDITS, 2);
    return undefined;
};
oAllCards.GeneRepair.getVictoryPoints = function () {
    return 2;
};

oAllCards.GeothermalPower.play = function (player) {
    player.addProduction(Resources.ENERGY, 2);
    return undefined;
};

oAllCards.GHGFactories.canPlay = function (player) {
    return player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.GHGFactories.play = function (player) {
    player.addProduction(Resources.ENERGY, -1);
    player.addProduction(Resources.HEAT, 4);
    return undefined;
};

oAllCards.GHGProducingBacteria.resourceType = ResourceType.MICROBE,
oAllCards.GHGProducingBacteria.resourceCount = 0;
oAllCards.GHGProducingBacteria.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 4);
};
oAllCards.GHGProducingBacteria.play = function () {
    return undefined;
};
oAllCards.GHGProducingBacteria.canAct = function () {
    return true;
};
oAllCards.GHGProducingBacteria.action = function (player, game) {
    var _this = this;
    if (this.resourceCount < 2) {
        player.addResourceTo(this);
        LogHelper.logAddResource(game, player, this);
        return undefined;
    }
    var orOptions = new OrOptions();
        orOptions.options.push(new SelectOption('Remove 2 microbes to raise temperature 1 step', 'Remove microbes', function () {
            player.removeResourceFrom(_this, 2);
            LogHelper.logRemoveResource(game, player, _this, 2, 'raise temperature 1 step');
            return game.increaseTemperature(player, 1);
        }));
    orOptions.options.push(new SelectOption('Add 1 microbe to this card', 'Add microbe', function () {
        player.addResourceTo(_this);
        LogHelper.logAddResource(game, player, _this);
        return undefined;
    }));
    if (orOptions.options.length === 1)
        return orOptions.options[0].cb();
    return orOptions;
};

oAllCards.GiantIceAsteroid.play = function (player, game) {
    game.increaseTemperature(player, 2);
    game.defer(new PlaceOceanTile(player, game, 'Select space for first ocean'));
    game.defer(new PlaceOceanTile(player, game, 'Select space for second ocean'));
    game.defer(new RemoveAnyPlants(player, game, 6));
    return undefined;
};

oAllCards.GiantSpaceMirror.play = function (player) {
    player.addProduction(Resources.ENERGY, 3);
    return undefined;
};

oAllCards.Grass.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -16);
};
oAllCards.Grass.play = function (player) {
    player.addProduction(Resources.PLANTS);
    player.plants += 3;
    return undefined;
};

oAllCards.GreatDam.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OCEANS, 4);
};
oAllCards.GreatDam.play = function (player) {
    player.addProduction(Resources.ENERGY, 2);
    return undefined;
};
oAllCards.GreatDam.getVictoryPoints = function () {
    return 1;
};

oAllCards.GreatEscarpmentConsortium.canPlay = function (player) {
    return player.getProduction(Resources.STEEL) >= 1;
};
oAllCards.GreatEscarpmentConsortium.play = function (player, game) {
    game.defer(new DecreaseAnyProduction(player, game, Resources.STEEL, 1));
    player.addProduction(Resources.STEEL);
    return undefined;
};

oAllCards.Greenhouses.play = function (player, game) {
    var qty = game.getCitiesInPlay();
    player.plants += qty;
    LogHelper.logGainStandardResource(game, player, Resources.PLANTS, qty);
    return undefined;
};

oAllCards.Hackers.canPlay = function (player) {
    return player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.Hackers.oAllCards.Hackers.play = function (player, game) {
    game.defer(new DecreaseAnyProduction(player, game, Resources.MEGACREDITS, 2));
    player.addProduction(Resources.MEGACREDITS, 2);
    player.addProduction(Resources.ENERGY, -1);
    return undefined;
};
oAllCards.Hackers.getVictoryPoints = function () {
    return -1;
};

oAllCards.Heather.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -14);
};
oAllCards.Heather.play = function (player) {
    player.addProduction(Resources.PLANTS);
    player.plants++;
    return undefined;
};

oAllCards.HeatTrappers.canPlay = function (_player, game) {
    return game.someoneHasResourceProduction(Resources.HEAT, 2);
};
oAllCards.HeatTrappers.play = function (player, game) {
    game.defer(new DecreaseAnyProduction(player, game, Resources.HEAT, 2));
    player.addProduction(Resources.ENERGY);
    return undefined;
};
oAllCards.HeatTrappers.getVictoryPoints = function () {
    return -1;
};

oAllCards.Herbivores.resourceType = ResourceType.ANIMAL,
oAllCards.Herbivores.resourceCount = 0;
oAllCards.Herbivores.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 8) && game.someoneHasResourceProduction(Resources.PLANTS, 1);
};
oAllCards.Herbivores.getVictoryPoints = function () {
    return Math.floor(this.resourceCount / 2);
};
oAllCards.Herbivores.onTilePlaced = function (cardOwner, space) {
    if (space.player === cardOwner && space.tile !== undefined && space.tile.tileType === TileType.GREENERY) {
        cardOwner.addResourceTo(this);
    }
};
oAllCards.Herbivores.play = function (player, game) {
    player.addResourceTo(this);
    game.defer(new DecreaseAnyProduction(player, game, Resources.PLANTS, 1));
    return undefined;
};

oAllCards.HiredRaiders.play = function (player, game) {
    if (game.isSoloMode()) {
        return new OrOptions(new SelectOption('Steal 2 steel', 'Steal steel', function () {
            player.steel += 2;
            return undefined;
        }), new SelectOption('Steal 3 mega credit', 'Steal MC', function () {
            player.megaCredits += 3;
            return undefined;
        }));
    }
    var availablePlayerTargets = game.getPlayers().filter(function (p) { return p.id !== player.id; });
    var availableActions = new OrOptions();
    availablePlayerTargets.forEach(function (target) {
        if (target.steel > 0) {
            var amountStolen_1 = Math.min(2, target.steel);
            var optionTitle = 'Steal ' + amountStolen_1 + ' steel from ' + target.name;
            availableActions.options.push(new SelectOption(optionTitle, 'Confirm', function () {
                player.steel += amountStolen_1;
                target.setResource(Resources.STEEL, -2, game, player);
                return undefined;
            }));
        }
        if (target.megaCredits > 0) {
            var amountStolen_1 = Math.min(3, target.megaCredits);
            var optionTitle = 'Steal ' + amountStolen_1 + ' MC from ' + target.name;
            availableActions.options.push(new SelectOption(optionTitle, 'Confirm', function () {
                player.megaCredits += amountStolen_1;
                target.setResource(Resources.MEGACREDITS, -3, game, player);
                return undefined;
            }));
        }
    });
    if (availableActions.options.length > 0)
        return availableActions;
    return undefined;
};

oAllCards.IceAsteroid.play = function (player, game) {
    game.defer(new PlaceOceanTile(player, game, 'Select space for first ocean'));
    game.defer(new PlaceOceanTile(player, game, 'Select space for second ocean'));
    return undefined;
};

oAllCards.IceCapMelting.canPlay = function (player, game) {
    var meetsTemperatureRequirements = game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, 2);
    return meetsTemperatureRequirements;
};
oAllCards.IceCapMelting.play = function (player, game) {
    game.defer(new PlaceOceanTile(player, game));
    return undefined;
};

oAllCards.ImmigrantCity.canPlay = function (player, game) {
    var hasEnergyProduction = player.getProduction(Resources.ENERGY) >= 1;
    var canPlaceCityOnMars = game.board.getAvailableSpacesForCity(player).length > 0;
    var canDecreaseMcProduction = player.getProduction(Resources.MEGACREDITS) >= -4 || player.isCorporation(CardName.THARSIS_REPUBLIC);
    return hasEnergyProduction && canDecreaseMcProduction && canPlaceCityOnMars;
};
oAllCards.ImmigrantCity.onTilePlaced = function (player, space) {
    if (Board.isCitySpace(space)) {
        player.addProduction(Resources.MEGACREDITS);
    }
};
oAllCards.ImmigrantCity.play = function (player, game) {
    return new SelectSpace('Select space for city tile', game.board.getAvailableSpacesForCity(player), function (space) {
        game.addCityTile(player, space.id);
        player.addProduction(Resources.ENERGY, -1);
        player.addProduction(Resources.MEGACREDITS, -2);
        return undefined;
    });
};

oAllCards.ImmigrationShuttles.getVictoryPoints = function (_player, game) {
    return Math.floor(game.getCitiesInPlay() / 3);
};
oAllCards.ImmigrationShuttles.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 5);
    return undefined;
};

oAllCards.ImportedGHG.play = function (player, _game) {
    player.addProduction(Resources.HEAT);
    player.heat += 3;
    return undefined;
};

// var __spreadArrays = (this && this.__spreadArrays) || function () {
//     for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
//     for (var r = Array(s), k = 0, i = 0; i < il; i++)
//         for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
//             r[k] = a[j];
// };

oAllCards.ImportedHydrogen.play = function (player, game) {
    var availableMicrobeCards = player.getResourceCards(ResourceType.MICROBE);
    var availableAnimalCards = player.getResourceCards(ResourceType.ANIMAL);
    var gainPlants = function () {
        var qty = 3;
        player.plants += qty;
        LogHelper.logGainStandardResource(game, player, Resources.PLANTS, qty);
        game.defer(new PlaceOceanTile(player, game));
        return undefined;
    },
    if (availableMicrobeCards.length === 0 && availableAnimalCards.length === 0) {
        return gainPlants();
    }
    var availableActions = [];
    var gainPlantsOption = new SelectOption('Gain 3 plants', 'Gain plants', gainPlants);
    availableActions.push(gainPlantsOption);
    if (availableMicrobeCards.length === 1) {
        var targetMicrobeCard_1 = availableMicrobeCards[0];
        availableActions.push(new SelectOption('Add 3 microbes to ' + name, 'Add microbes', function () {
            player.addResourceTo(targetMicrobeCard_1, 3);
            LogHelper.logAddResource(game, player, targetMicrobeCard_1, 3);
            game.defer(new PlaceOceanTile(player, game));
            return undefined;
        }));
    }
    else if (availableMicrobeCards.length > 1) {
        availableActions.push(new SelectCard('Add 3 microbes to a card', 'Add microbes', availableMicrobeCards, function (foundCards) {
            player.addResourceTo(foundCards[0], 3);
            LogHelper.logAddResource(game, player, foundCards[0], 3);
            game.defer(new PlaceOceanTile(player, game));
            return undefined;
        }));
    }
    if (availableAnimalCards.length === 1) {
        var targetAnimalCard_1 = availableAnimalCards[0];
        availableActions.push(new SelectOption('Add 2 animals to ' + name, 'Add animals', function () {
            player.addResourceTo(targetAnimalCard_1, 2);
            LogHelper.logAddResource(game, player, targetAnimalCard_1, 2);
            game.defer(new PlaceOceanTile(player, game));
            return undefined;
        }));
    }
    else if (availableAnimalCards.length > 1) {
        availableActions.push(new SelectCard('Add 2 animals to a card', 'Add animals', availableAnimalCards, function (foundCards) {
            player.addResourceTo(foundCards[0], 2);
            LogHelper.logAddResource(game, player, foundCards[0], 2);
            game.defer(new PlaceOceanTile(player, game));
            return undefined;
        }));
    }
    let retOptions = new OrOptions();
    for (let o of availableActions) {
        retOptions.push(o);
    }
    return retOptions;

    //return new (OrOptions.bind.apply(OrOptions, __spreadArrays([void 0], availableActions)))();
};

oAllCards.ImportedNitrogen.play = function (player, game) {
    player.plants += 4;
    player.increaseTerraformRating(game);
    game.defer(new AddResourcesToCard(player, game, ResourceType.MICROBE, 3));
    game.defer(new AddResourcesToCard(player, game, ResourceType.ANIMAL, 2));
    return undefined;
};

oAllCards.ImportOfAdvancedGHG.play = function (player, _game) {
    player.addProduction(Resources.HEAT, 2);
    return undefined;
};

oAllCards.IndenturedWorkers.getCardDiscount = function (player, _game) {
    if (player.lastCardPlayed !== undefined && player.lastCardPlayed.name === this.name) {
        return 8;
    }
    return 0;
};
oAllCards.IndenturedWorkers.play = function () {
    return undefined;
};
oAllCards.IndenturedWorkers.getVictoryPoints = function () {
    return -1;
};

oAllCards.IndustrialCenter.getAvailableSpaces = function (player, game) {
    return game.board.getAvailableSpacesOnLand(player)
        .filter(function (space) { return game.board.getAdjacentSpaces(space).some(function (adjacentSpace) { return Board.isCitySpace(adjacentSpace); }); });
};
oAllCards.IndustrialCenter.canPlay = function (player, game) {
    return this.getAvailableSpaces(player, game).length > 0;
};
oAllCards.IndustrialCenter.play = function (player, game) {
    var _this = this;
    return new SelectSpace('Select space adjacent to a city tile', this.getAvailableSpaces(player, game), function (foundSpace) {
        game.addTile(player, foundSpace.spaceType, foundSpace, { tileType: TileType.INDUSTRIAL_CENTER });
        foundSpace.adjacency = _this.adjacencyBonus;
        return undefined;
    });
};
oAllCards.IndustrialCenter.canAct = function (player) {
    return player.canAfford(7);
};
oAllCards.IndustrialCenter.action = function (player, game) {
    game.defer(new SelectHowToPayDeferred(player, 7, false, false, 'Select how to pay for action'));
    player.addProduction(Resources.STEEL);
    return undefined;
};

oAllCards.IndustrialMicrobes.play = function (player, _game) {
    player.addProduction(Resources.ENERGY);
    player.addProduction(Resources.STEEL);
    return undefined;
};

oAllCards.Insects.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 6);
};
oAllCards.Insects.play = function (player) {
    player.addProduction(Resources.PLANTS, player.getTagCount(Tags.PLANT));
    return undefined;
};

oAllCards.Insulation.canPlay = function (player) {
    return player.getProduction(Resources.HEAT) >= 1;
};
oAllCards.Insulation.play = function (player, _game) {
    return new SelectAmount('Select amount of heat production to decrease', 'Decrease', function (amount) {
        player.addProduction(Resources.HEAT, -amount);
        player.addProduction(Resources.MEGACREDITS, amount);
        return undefined;
    }, 1, player.getProduction(Resources.HEAT));
};

oAllCards.InterstellarColonyShip.canPlay = function (player) {
    return player.getTagCount(Tags.SCIENCE) >= 5;
};
oAllCards.InterstellarColonyShip.play = function (player, _game) {
    if (player.getTagCount(Tags.SCIENCE) < 5) {
        throw 'Requires 5 science tags.';
    }
    return undefined;
};
oAllCards.InterstellarColonyShip.getVictoryPoints = function () {
    return 4;
};

oAllCards.InventionContest.play = function (player, game) {
    var cardsDrawn = [
        game.dealer.dealCard(),
        game.dealer.dealCard(),
        game.dealer.dealCard(),
    ];
    return new SelectCard('Select card to take into hand', 'Take', cardsDrawn, function (foundCards) {
        player.cardsInHand.push(foundCards[0]);
        cardsDrawn
            .filter(function (c) { return c !== foundCards[0]; })
            .forEach(function (c) { return game.dealer.discard(c); });
        return undefined;
    });
};

oAllCards.InventorsGuild.play = function (_player, _game) {
    return undefined;
};
oAllCards.InventorsGuild.canAct = function () {
    return true;
};
oAllCards.InventorsGuild.action = function (player, game) {
    var dealtCard = game.dealer.dealCard();
    var canSelectCard = player.canAfford(player.cardCost);
    return new SelectCard(canSelectCard ? 'Select card to keep or none to discard' : 'You cannot pay for this card', 'Save', [dealtCard], function (cards) {
        if (cards.length === 0 || !canSelectCard) {
            LogHelper.logCardChange(game, player, 'discarded', 1);
            game.dealer.discard(dealtCard);
            return undefined;
        }
        LogHelper.logCardChange(game, player, 'drew', 1);
        player.cardsInHand.push(dealtCard);
        game.defer(new SelectHowToPayDeferred(player, player.cardCost, false, false, 'Select how to pay for action'));
        return undefined;
    }, canSelectCard ? 1 : 0, 0);
};

oAllCards.InvestmentLoan.canPlay = function (player) {
    return player.getProduction(Resources.MEGACREDITS) >= -4;
};
oAllCards.InvestmentLoan.play = function (player, _game) {
    player.addProduction(Resources.MEGACREDITS, -1);
    player.megaCredits += 10;
    return undefined;
};

oAllCards.IoMiningIndustries.getVictoryPoints = function (player) {
    return player.getTagCount(Tags.JOVIAN, false, false);
};
oAllCards.IoMiningIndustries.play = function (player) {
    player.addProduction(Resources.TITANIUM, 2);
    player.addProduction(Resources.MEGACREDITS, 2);
    return undefined;
};

oAllCards.Ironworks.play = function (_player, _game) {
    return undefined;
};
oAllCards.Ironworks.canAct = function (player, game) {
    var hasEnoughEnergy = player.energy >= 4;
    return hasEnoughEnergy;
};
oAllCards.Ironworks.action = function (player, game) {
    player.energy -= 4;
    player.steel++;
    return game.increaseOxygenLevel(player, 1);
};

oAllCards.KelpFarming.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OCEANS, 6);
};
oAllCards.KelpFarming.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 2);
    player.addProduction(Resources.PLANTS, 3);
    player.plants += 2;
    return undefined;
};
oAllCards.KelpFarming.getVictoryPoints = function () {
    return 1;
};

oAllCards.LagrangeObservatory.play = function (player, game) {
    player.cardsInHand.push(game.dealer.dealCard());
    return undefined;
};
oAllCards.LagrangeObservatory.getVictoryPoints = function () {
    return 1;
};

oAllCards.LakeMarineris.canPlay = function (player, game) {
    var meetsTemperatureRequirements = game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, 0);
    return meetsTemperatureRequirements;
};
oAllCards.LakeMarineris.play = function (player, game) {
    game.defer(new PlaceOceanTile(player, game, 'Select space for first ocean'));
    game.defer(new PlaceOceanTile(player, game, 'Select space for second ocean'));
    return undefined;
};
oAllCards.LakeMarineris.getVictoryPoints = function () {
    return 2;
};

oAllCards.LandClaim.canPlay = function (_player, game) {
    return game.board.getNonReservedLandSpaces().length > 0;
};
oAllCards.LandClaim.play = function (player, game) {
    return new SelectSpace('Select space for claim', game.board.getNonReservedLandSpaces(), function (foundSpace) {
        foundSpace.player = player;
        LogHelper.logBoardTileAction(game, player, foundSpace, 'land claim');
        return undefined;
    });
};

oAllCards.LargeConvoy.play = function (player, game) {
    player.cardsInHand.push(game.dealer.dealCard(), game.dealer.dealCard());
    var animalCards = player.getResourceCards(ResourceType.ANIMAL);
    var gainPlants = function () {
        player.plants += 5;
        LogHelper.logGainStandardResource(game, player, Resources.PLANTS, 5);
        game.defer(new PlaceOceanTile(player, game));
        return undefined;
    },
    if (animalCards.length === 0)
        return gainPlants();
    var availableActions = [];
    var gainPlantsOption = new SelectOption('Gain 5 plants', 'Gain plants', gainPlants);
    availableActions.push(gainPlantsOption);
    if (animalCards.length === 1) {
        var targetAnimalCard_1 = animalCards[0];
        availableActions.push(new SelectOption('Add 4 animals to ' + name, 'Add animals', function () {
            player.addResourceTo(targetAnimalCard_1, 4);
            LogHelper.logAddResource(game, player, targetAnimalCard_1, 4);
            game.defer(new PlaceOceanTile(player, game));
            return undefined;
        }));
    }
    else {
        availableActions.push(new SelectCard('Select card to add 4 animals', 'Add animals', animalCards, function (foundCards) {
            player.addResourceTo(foundCards[0], 4);
            LogHelper.logAddResource(game, player, foundCards[0], 4);
            game.defer(new PlaceOceanTile(player, game));
            return undefined;
        }));
    }
    let retOptions = new OrOptions();
    for (let o of availableActions) {
        retOptions.push(o);
    }
    return retOptions;
};
oAllCards.LargeConvoy.getVictoryPoints = function () {
    return 2;
};

oAllCards.LavaFlows.getVolcanicSpaces = function (player, game) {
    if (game.gameOptions.boardName === BoardName.ORIGINAL) {
        return game.board.getSpaces(SpaceType.LAND, player)
            .filter(function (space) { return space.tile === undefined && (space.player === undefined || space.player === player); })
            .filter(function (space) { return space.id === SpaceName.THARSIS_THOLUS ||
            space.id === SpaceName.ASCRAEUS_MONS ||
            space.id === SpaceName.ARSIA_MONS ||
            space.id === SpaceName.PAVONIS_MONS; });
    }
    else if (game.gameOptions.boardName === BoardName.ELYSIUM) {
        return game.board.getSpaces(SpaceType.LAND, player)
            .filter(function (space) { return space.tile === undefined && (space.player === undefined || space.player === player); })
            .filter(function (space) { return space.id === SpaceName.HECATES_THOLUS ||
            space.id === SpaceName.ELYSIUM_MONS ||
            space.id === SpaceName.ARSIA_MONS_ELYSIUM ||
            space.id === SpaceName.OLYMPUS_MONS; });
    }
    else {
        return game.board.getSpaces(SpaceType.LAND, player)
            .filter(function (space) { return space.tile === undefined && (space.player === undefined || space.player === player); });
    }
};
oAllCards.LavaFlows.canPlay = function (player, game) {
    var canPlaceTile = LavaFlows.getVolcanicSpaces(player, game).length > 0;
    return canPlaceTile;
};
oAllCards.LavaFlows.play = function (player, game) {
    var _this = this;
    return new SelectSpace('Select either Tharsis Tholus, Ascraeus Mons, Pavonis Mons or Arsia Mons', LavaFlows.getVolcanicSpaces(player, game), function (space) {
        game.addTile(player, SpaceType.LAND, space, { tileType: TileType.LAVA_FLOWS });
        space.adjacency = _this.adjacencyBonus;
        return game.increaseTemperature(player, 2);
    });
};

oAllCards.Lichen.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -24);
};
oAllCards.Lichen.play = function (player) {
    player.addProduction(Resources.PLANTS);
    return undefined;
};

oAllCards.LightningHarvest.canPlay = function (player) {
    return player.getTagCount(Tags.SCIENCE) >= 3;
};
oAllCards.LightningHarvest.play = function (player, _game) {
    if (player.getTagCount(Tags.SCIENCE) < 3) {
        throw 'Requires 3 science tags';
    }
    player.addProduction(Resources.ENERGY);
    player.addProduction(Resources.MEGACREDITS);
    return undefined;
};
oAllCards.LightningHarvest.getVictoryPoints = function () {
    return 1;
};

oAllCards.Livestock.resourceType = ResourceType.ANIMAL,
oAllCards.Livestock.resourceCount = 0;
oAllCards.Livestock.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 9) && player.getProduction(Resources.PLANTS) >= 1;
};
oAllCards.Livestock.getVictoryPoints = function () {
    return this.resourceCount;
};
oAllCards.Livestock.play = function (player) {
    player.addProduction(Resources.PLANTS, -1);
    player.addProduction(Resources.MEGACREDITS, 2);
    return undefined;
};
oAllCards.Livestock.canAct = function () {
    return true;
};
oAllCards.Livestock.action = function (player) {
    player.addResourceTo(this);
    return undefined;
};

oAllCards.LocalHeatTrapping.canPlay = function (player, game) {
    var requiredHeatAmt = 5;
    if (player.canUseHeatAsMegaCredits) {
        return (player.heat >= requiredHeatAmt) && (player.heat + player.megaCredits >= requiredHeatAmt + player.getCardCost(game, this));
    }
    return player.heat >= requiredHeatAmt || (player.isCorporation(CardName.STORMCRAFT_INCORPORATED) && (player.getResourcesOnCorporation() * 2) + player.heat >= 5);
};
oAllCards.LocalHeatTrapping.play = function (player, game) {
    var animalCards = player.getResourceCards(ResourceType.ANIMAL);
    var availableActions = new OrOptions();
    var gain4Plants = function () {
        player.plants += 4;
        LogHelper.logGainStandardResource(game, player, Resources.PLANTS, 4);
        return undefined;
    },
    if (animalCards.length === 0) {
        availableActions.options.push(new SelectOption('Gain 4 plants', 'Gain plants', gain4Plants));
    }
    else if (animalCards.length === 1) {
        var targetCard_1 = animalCards[0];
        availableActions.options.push(new SelectOption('Gain 4 plants', 'Gain plants', gain4Plants), new SelectOption('Add 2 animals to ' + name, 'Add animals', function () {
            player.addResourceTo(targetCard_1, 2);
            LogHelper.logAddResource(game, player, targetCard_1, 2);
            return undefined;
        }));
    }
    else {
        availableActions.options.push(new SelectOption('Gain 4 plants', 'Gain plants', gain4Plants), new SelectCard('Select card to add 2 animals', 'Add animals', animalCards, function (foundCards) {
            player.addResourceTo(foundCards[0], 2);
            LogHelper.logAddResource(game, player, foundCards[0], 2);
            return undefined;
        }));
    }
    if (player.isCorporation(CardName.STORMCRAFT_INCORPORATED) &&
        player.getResourcesOnCorporation() > 0) {
        var heatAmount_1;
        var floaterAmount_1;
        return new AndOptions(function () {
            if (heatAmount_1 +
                (floaterAmount_1 * 2) < 5) {
                throw new Error('Need to pay 5 heat');
            }
            player.removeResourceFrom(player.corporationCard, floaterAmount_1);
            player.heat -= heatAmount_1;
            if (availableActions.options.length === 1)
                return availableActions.options[0].cb();
            return availableActions;
        }, new SelectAmount('Select amount of heat to spend', 'Spend heat', function (amount) {
            heatAmount_1 = amount;
            return undefined;
        }, 0, player.heat), new SelectAmount('Select amount of floaters on corporation to spend', 'Spend floaters', function (amount) {
            floaterAmount_1 = amount;
            return undefined;
        }, 0, player.getResourcesOnCorporation()));
    }
    player.heat -= 5;
    if (availableActions.options.length === 1)
        return availableActions.options[0].cb();
    return availableActions;
};

oAllCards.LunarBeam.canPlay = function (player) {
    return player.getProduction(Resources.MEGACREDITS) >= -3;
};
oAllCards.LunarBeam.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, -2);
    player.addProduction(Resources.HEAT, 2);
    player.addProduction(Resources.ENERGY, 2);
    return undefined;
};

oAllCards.MagneticFieldDome.canPlay = function (player, game) {
    var hasEnergyProduction = player.getProduction(Resources.ENERGY) >= 2;
    return hasEnergyProduction;
};
oAllCards.MagneticFieldDome.play = function (player, game) {
    player.addProduction(Resources.ENERGY, -2);
    player.addProduction(Resources.PLANTS);
    player.increaseTerraformRating(game);
    return undefined;
};

oAllCards.MagneticFieldGenerators.canPlay = function (player, game) {
    var meetsEnergyRequirements = player.getProduction(Resources.ENERGY) >= 4;
    return meetsEnergyRequirements;
};
oAllCards.MagneticFieldGenerators.play = function (player, game) {
    player.addProduction(Resources.ENERGY, -4);
    player.addProduction(Resources.PLANTS, 2);
    player.increaseTerraformRatingSteps(3, game);
    return undefined;
};

oAllCards.Mangrove.canPlay = function (player, game) {
    var meetsTemperatureRequirements = game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, 4);
    return meetsTemperatureRequirements;
};
oAllCards.Mangrove.play = function (player, game) {
    return new SelectSpace('Select ocean space for greenery tile', game.board.getAvailableSpacesForOcean(player), function (foundSpace) {
        return game.addGreenery(player, foundSpace.id, SpaceType.OCEAN);
    });
};
oAllCards.Mangrove.getVictoryPoints = function () {
    return 1;
};

oAllCards.MarsUniversity.onCardPlayed = function (player, game, card) {
    var scienceTags = card.tags.filter(function (tag) { return tag === Tags.SCIENCE; }).length;
    for (var i = 0; i < scienceTags; i++) {
        game.defer(new DeferredAction(player, function () {
            if (player.cardsInHand.length === 0) {
                return undefined;
            }
            return new OrOptions(new SelectCard('Select a card to discard', 'Discard', player.cardsInHand, function (foundCards) {
                player.cardsInHand.splice(player.cardsInHand.indexOf(foundCards[0]), 1);
                game.dealer.discard(foundCards[0]);
                player.cardsInHand.push(game.dealer.dealCard());
                return undefined;
            }), new SelectOption('Do nothing', 'Confirm', function () {
                return undefined;
            }));
        }));
    }
    return undefined;
};
oAllCards.MarsUniversity.play = function () {
    return undefined;
};
oAllCards.MarsUniversity.getVictoryPoints = function () {
    return 1;
};

oAllCards.MartianRails.play = function (_player, _game) {
    return undefined;
};
oAllCards.MartianRails.canAct = function (player) {
    return player.energy >= 1;
};
oAllCards.MartianRails.action = function (player, game) {
    var gainedMC = game.getCitiesInPlayOnMars();
    player.energy--;
    player.megaCredits += gainedMC;
    LogHelper.logGainStandardResource(game, player, Resources.MEGACREDITS, gainedMC);
    return undefined;
};

oAllCards.MassConverter.canPlay = function (player) {
    return player.getTagCount(Tags.SCIENCE) >= 5;
};
oAllCards.MassConverter.getCardDiscount = function (_player, _game, card) {
    if (card.tags.indexOf(Tags.SPACE) !== -1) {
        return 2;
    }
    return 0;
};
oAllCards.MassConverter.play = function (player) {
    player.addProduction(Resources.ENERGY, 6);
    return undefined;
};

oAllCards.MediaArchives.play = function (player, game) {
    var allPlayedEvents = 0;
    game.getPlayers().forEach(function (player) {
        player.playedCards.forEach(function (card) {
            if (card.cardType === CardType.EVENT) {
                allPlayedEvents++;
            }
        });
    });
    player.megaCredits += allPlayedEvents;
    LogHelper.logGainStandardResource(game, player, Resources.MEGACREDITS, allPlayedEvents);
    return undefined;
};

oAllCards.MediaGroup.onCardPlayed = function (player, _game, card) {
    if (card.cardType === CardType.EVENT) {
        player.megaCredits += 3;
    }
};
oAllCards.MediaGroup.play = function () {
    return undefined;
};

oAllCards.MedicalLab.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, Math.floor((player.getTagCount(Tags.BUILDING) + 1) / 2));
    return undefined;
};
oAllCards.MedicalLab.getVictoryPoints = function () {
    return 1;
};

oAllCards.MethaneFromTitan.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 2);
};
oAllCards.MethaneFromTitan.play = function (player) {
    player.addProduction(Resources.HEAT, 2);
    player.addProduction(Resources.PLANTS, 2);
    return undefined;
};
oAllCards.MethaneFromTitan.getVictoryPoints = function () {
    return 2;
};

oAllCards.MicroMills.play = function (player, _game) {
    player.addProduction(Resources.HEAT);
    return undefined;
};

oAllCards.Mine.play = function (player) {
    player.addProduction(Resources.STEEL);
    return undefined;
};

oAllCards.MineralDeposit.play = function (player, _game) {
    player.steel += 5;
    return undefined;
};

oAllCards.MiningArea.getAvailableSpaces = function (player, game) {
    return _super.prototype.getAvailableSpaces.call(this, player, game)
        .filter(function (space) { return game.board.getAdjacentSpaces(space).some(function (adjacentSpace) { return adjacentSpace.tile !== undefined && adjacentSpace.tile.tileType !== TileType.OCEAN && adjacentSpace.player === player; }); });
};
oAllCards.MiningRights.canPlay = function (player, game) {
    return this.getAvailableSpaces(player, game).length > 0;
};
oAllCards.MiningRights.getAvailableSpaces = function (player, game) {
    return game.board.getAvailableSpacesOnLand(player)
        .filter(function (space) { return space.tile === undefined; })
        .filter(function (space) { return space.bonus.indexOf(SpaceBonus.STEEL) !== -1 || space.bonus.indexOf(SpaceBonus.TITANIUM) !== -1; });
};
oAllCards.MiningRights.getSelectTitle = function () {
    var result = 'Select a space with a steel or titanium bonus';
    if (this.name === CardName.MINING_AREA || this.name === CardName.MINING_AREA_ARES) {
        result += ' adjacent to one of your tiles';
    }
    return result;
};
oAllCards.MiningRights.getTileType = function (bonus) {
    if (this.name === CardName.MINING_RIGHTS) {
        return TileType.MINING_RIGHTS;
    }
    return TileType.MINING_AREA;
};
oAllCards.MiningRights.play = function (player, game) {
    var _this = this;
    return new SelectSpace(this.getSelectTitle(), this.getAvailableSpaces(player, game), function (foundSpace) {
        var bonus = SpaceBonus.STEEL;
        var resource = Resources.STEEL;
        if (foundSpace.bonus.includes(SpaceBonus.TITANIUM) === true) {
            bonus = SpaceBonus.TITANIUM;
            resource = Resources.TITANIUM;
        }
        game.addTile(player, foundSpace.spaceType, foundSpace, { tileType: _this.getTileType(bonus) });
        player.addProduction(resource);
        LogHelper.logGainProduction(game, player, resource);
        return undefined;
    });
};


oAllCards.MiningRights.canPlay = function (player, game) {
    return this.getAvailableSpaces(player, game).length > 0;
};
oAllCards.MiningRights.getAvailableSpaces = function (player, game) {
    return game.board.getAvailableSpacesOnLand(player)
        .filter(function (space) { return space.tile === undefined; })
        .filter(function (space) { return space.bonus.indexOf(SpaceBonus.STEEL) !== -1 || space.bonus.indexOf(SpaceBonus.TITANIUM) !== -1; });
};
oAllCards.MiningRights.getSelectTitle = function () {
    var result = 'Select a space with a steel or titanium bonus';
    if (this.name === CardName.MINING_AREA || this.name === CardName.MINING_AREA_ARES) {
        result += ' adjacent to one of your tiles';
    }
    return result;
};
oAllCards.MiningRights.getTileType = function (bonus) {
    if (this.name === CardName.MINING_RIGHTS) {
        return TileType.MINING_RIGHTS;
    }
    return TileType.MINING_AREA;
};
oAllCards.MiningRights.play = function (player, game) {
    var _this = this;
    return new SelectSpace(this.getSelectTitle(), this.getAvailableSpaces(player, game), function (foundSpace) {
        var bonus = SpaceBonus.STEEL;
        var resource = Resources.STEEL;
        if (foundSpace.bonus.includes(SpaceBonus.TITANIUM) === true) {
            bonus = SpaceBonus.TITANIUM;
            resource = Resources.TITANIUM;
        }
        game.addTile(player, foundSpace.spaceType, foundSpace, { tileType: _this.getTileType(bonus) });
        player.addProduction(resource);
        LogHelper.logGainProduction(game, player, resource);
        return undefined;
    });
};

oAllCards.MiningExpedition.play = function (player, game) {
    game.defer(new RemoveAnyPlants(player, game, 2));
    player.steel += 2;
    return game.increaseOxygenLevel(player, 1);
};


oAllCards.MirandaResort.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, player.getTagCount(Tags.EARTH));
    return undefined;
};
oAllCards.MirandaResort.getVictoryPoints = function () {
    return 1;
};

oAllCards.MoholeArea.play = function (player, game) {
    var _this = this;
    return new SelectSpace('Select an ocean space for special tile', game.board.getAvailableSpacesForOcean(player), function (space) {
        game.addTile(player, SpaceType.OCEAN, space, { tileType: TileType.MOHOLE_AREA });
        space.adjacency = _this.adjacencyBonus;
        player.addProduction(Resources.HEAT, 4);
        return undefined;
    });
};

oAllCards.Moss.canPlay = function (player, game) {
    var meetsOceanRequirements = game.checkMinRequirements(player, GlobalParameter.OCEANS, 3);
    var hasViralEnhancers = player.playedCards.find(function (card) { return card.name === CardName.VIRAL_ENHANCERS; });
    var hasEnoughPlants = player.plants >= 1 || hasViralEnhancers !== undefined || player.isCorporation(CardName.MANUTECH);
    return meetsOceanRequirements && hasEnoughPlants;
};
oAllCards.Moss.play = function (player) {
    player.plants--;
    player.addProduction(Resources.PLANTS);
    return undefined;
};

oAllCards.NaturalPreserve.getAvailableSpaces = function (player, game) {
    return game.board.getAvailableSpacesOnLand(player)
        .filter(function (space) { return game.board.getAdjacentSpaces(space).some(function (adjacentSpace) { return adjacentSpace.tile !== undefined; }) === false; });
};
oAllCards.NaturalPreserve.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.OXYGEN, 4) && this.getAvailableSpaces(player, game).length > 0;
};
oAllCards.NaturalPreserve.play = function (player, game) {
    var _this = this;
    return new SelectSpace('Select space for special tile next to no other tile', this.getAvailableSpaces(player, game), function (foundSpace) {
        game.addTile(player, foundSpace.spaceType, foundSpace, { tileType: TileType.NATURAL_PRESERVE });
        foundSpace.adjacency = _this.adjacencyBonus;
        player.addProduction(Resources.MEGACREDITS);
        return undefined;
    });
};
oAllCards.NaturalPreserve.getVictoryPoints = function () {
    return 1;
};

oAllCards.NitriteReducingBacteria.resourceType = ResourceType.MICROBE,
oAllCards.NitriteReducingBacteria.resourceCount = 0;
oAllCards.NitriteReducingBacteria.play = function (player, game) {
    var _this = this;
    game.defer(new DeferredAction(player, function () {
        player.addResourceTo(_this, 3);
        return undefined;
    }));
    return undefined;
};
oAllCards.NitriteReducingBacteria.canAct = function () {
    return true;
};
oAllCards.NitriteReducingBacteria.action = function (player, game) {
    var _this = this;
    if (this.resourceCount < 3) {
        player.addResourceTo(this);
        LogHelper.logAddResource(game, player, this);
        return undefined;
    }
    var orOptions = new OrOptions();
        orOptions.options.push(new SelectOption('Remove 3 microbes to increase your terraform rating 1 step', 'Remove microbes', function () {
            _this.resourceCount -= 3;
            LogHelper.logRemoveResource(game, player, _this, 3, 'gain 1 TR');
            player.increaseTerraformRating(game);
            return undefined;
        }));
    orOptions.options.push(new SelectOption('Add 1 microbe to this card', 'Add microbe', function () {
        player.addResourceTo(_this);
        LogHelper.logAddResource(game, player, _this);
        return undefined;
    }));
    if (orOptions.options.length === 1)
        return orOptions.options[0].cb();
    return orOptions;
};

oAllCards.NitrogenRichAsteroid.play = function (player, game) {
    player.increaseTerraformRatingSteps(2, game);
    if (player.getTagCount(Tags.PLANT) < 3) {
        player.addProduction(Resources.PLANTS);
    }
    else {
        player.addProduction(Resources.PLANTS, 4);
    }
    return game.increaseTemperature(player, 1);
};

oAllCards.NitrophilicMoss.canPlay = function (player, game) {
    var meetsOceanRequirements = game.checkMinRequirements(player, GlobalParameter.OCEANS, 3);
    var hasViralEnhancers = player.playedCards.find(function (card) { return card.name === CardName.VIRAL_ENHANCERS; });
    var hasEnoughPlants = player.plants >= 2 || player.isCorporation(CardName.MANUTECH) || player.plants >= 1 && hasViralEnhancers !== undefined;
    return meetsOceanRequirements && hasEnoughPlants;
};
oAllCards.NitrophilicMoss.play = function (player) {
    player.plants -= 2;
    player.addProduction(Resources.PLANTS, 2);
    return undefined;
};

oAllCards.NoctisCity.canPlay = function (player, game) {
    if (game.gameOptions.boardName === BoardName.ORIGINAL) {
        return player.getProduction(Resources.ENERGY) >= 1;
    }
    else {
        return player.getProduction(Resources.ENERGY) >= 1 &&
            game.board.getAvailableSpacesForCity(player).length > 0;
    }
};
oAllCards.NoctisCity.play = function (player, game) {
    var noctisSpace = game.getSpace(SpaceName.NOCTIS_CITY);
    player.addProduction(Resources.ENERGY, -1);
    player.addProduction(Resources.MEGACREDITS, 3);
    if (game.gameOptions.boardName === BoardName.ORIGINAL) {
        game.addCityTile(player, noctisSpace.id);
        return undefined;
    }
    else {
        return new SelectSpace('Select space for Noctis city', game.board.getAvailableSpacesForCity(player), function (space) {
            game.addCityTile(player, space.id);
            return undefined;
        });
    }
};

oAllCards.NoctisFarming.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -20);
};
oAllCards.NoctisFarming.play = function (player) {
    player.addProduction(Resources.MEGACREDITS);
    player.plants += 2;
    return undefined;
};
oAllCards.NoctisFarming.getVictoryPoints = function () {
    return 1;
};

oAllCards.NuclearPower.canPlay = function (player) {
    return player.getProduction(Resources.MEGACREDITS) >= -3;
};
oAllCards.NuclearPower.play = function (player, _game) {
    if (player.getProduction(Resources.MEGACREDITS) < -3) {
        throw 'Not enough mega credit production';
    }
    player.addProduction(Resources.MEGACREDITS, -2);
    player.addProduction(Resources.ENERGY, 3);
    return undefined;
};

oAllCards.NuclearZone.canPlay = function (player, game) {
    var canPlaceTile = game.board.getAvailableSpacesOnLand(player).length > 0;
    return canPlaceTile;
};
oAllCards.NuclearZone.play = function (player, game) {
    var _this = this;
    return new SelectSpace('Select space for special tile', game.board.getAvailableSpacesOnLand(player), function (foundSpace) {
        game.addTile(player, foundSpace.spaceType, foundSpace, { tileType: TileType.NUCLEAR_ZONE });
        foundSpace.adjacency = _this.adjacencyBonus;
        return game.increaseTemperature(player, 2);
    });
};
oAllCards.NuclearZone.getVictoryPoints = function () {
    return -2;
};

oAllCards.OlympusConference.resourceType = ResourceType.SCIENCE,
oAllCards.OlympusConference.resourceCount = 0;
oAllCards.OlympusConference.onCardPlayed = function (player, game, card) {
    var _this = this;
    var scienceTags = card.tags.filter(function (tag) { return tag === Tags.SCIENCE; }).length;
    for (var i = 0; i < scienceTags; i++) {
        game.defer(new DeferredAction(player, function () {
            if (_this.resourceCount === 0) {
                _this.resourceCount++;
                return undefined;
            }
            return new OrOptions(new SelectOption('Remove a science resource from this card to draw a card', 'Remove resource', function () {
                player.removeResourceFrom(_this);
                player.cardsInHand.push(game.dealer.dealCard());
                return undefined;
            }), new SelectOption('Add a science resource to this card', 'Add resource', function () {
                _this.resourceCount++;
                return undefined;
            }));
        }), true);
    }
    return undefined;
};
oAllCards.OlympusConference.play = function () {
    return undefined;
};
oAllCards.OlympusConference.getVictoryPoints = function () {
    return 1;
};

oAllCards.OpenCity.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 12) && player.getProduction(Resources.ENERGY) >= 1 && game.board.getAvailableSpacesForCity(player).length > 0;
};
oAllCards.OpenCity.play = function (player, game) {
    return new SelectSpace('Select space for city tile', game.board.getAvailableSpacesForCity(player), function (space) {
        game.addCityTile(player, space.id);
        player.addProduction(Resources.ENERGY, -1);
        player.addProduction(Resources.MEGACREDITS, 4);
        player.plants += 2;
        return undefined;
    });
};
oAllCards.OpenCity.getVictoryPoints = function () {
    return 1;
};

oAllCards.OptimalAerobraking.onCardPlayed = function (player, _game, card) {
    if (card.cardType === CardType.EVENT && card.tags.indexOf(Tags.SPACE) !== -1) {
        player.megaCredits += 3;
        player.heat += 3;
    }
};
oAllCards.OptimalAerobraking.play = function () {
    return undefined;
};

oAllCards.OreProcessor.play = function (_player, _game) {
    return undefined;
};
oAllCards.OreProcessor.canAct = function (player, game) {
    var hasEnoughEnergy = player.energy >= 4;
    return hasEnoughEnergy;
};
oAllCards.OreProcessor.action = function (player, game) {
    player.energy -= 4;
    player.titanium++;
    return game.increaseOxygenLevel(player, 1);
};

oAllCards.PermafrostExtraction.canPlay = function (player, game) {
    var meetsTemperatureRequirements = game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -8);
    return meetsTemperatureRequirements;
};
oAllCards.PermafrostExtraction.play = function (player, game) {
    if (game.board.getOceansOnBoard() === MAX_OCEAN_TILES) {
        return undefined;
    }
    return new SelectSpace('Select space for ocean tile', game.board.getAvailableSpacesForOcean(player), function (space) {
        game.addOceanTile(player, space.id);
        return undefined;
    });
};

oAllCards.PeroxidePower.canPlay = function (player) {
    return player.getProduction(Resources.MEGACREDITS) >= -4;
};
oAllCards.PeroxidePower.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, -1);
    player.addProduction(Resources.ENERGY, 2);
    return undefined;
};

oAllCards.Pets.resourceType = ResourceType.ANIMAL,
oAllCards.Pets.resourceCount = 0;
oAllCards.Pets.getVictoryPoints = function () {
    return Math.floor(this.resourceCount / 2);
};
oAllCards.Pets.onTilePlaced = function (player, space) {
    if (Board.isCitySpace(space)) {
        player.addResourceTo(this);
    }
};
oAllCards.Pets.play = function (player) {
    player.addResourceTo(this);
    return undefined;
};

oAllCards.PhobosSpaceHaven.play = function (player, game) {
    game.addCityTile(player, SpaceName.PHOBOS_SPACE_HAVEN, SpaceType.COLONY);
    player.addProduction(Resources.TITANIUM);
    return undefined;
};
oAllCards.PhobosSpaceHaven.getVictoryPoints = function () {
    return 3;
};

oAllCards.PhysicsComplex.resourceType = ResourceType.SCIENCE,
oAllCards.PhysicsComplex.resourceCount = 0;
oAllCards.PhysicsComplex.getVictoryPoints = function () {
    return 2 * this.resourceCount;
};
oAllCards.PhysicsComplex.play = function () {
    return undefined;
};
oAllCards.PhysicsComplex.canAct = function (player) {
    return player.energy >= 6;
};
oAllCards.PhysicsComplex.action = function (player) {
    player.energy -= 6;
    this.resourceCount++;
    return undefined;
};

oAllCards.Plantation.canPlay = function (player, game) {
    var meetsTagRequirements = player.getTagCount(Tags.SCIENCE) >= 2;
    var canPlaceTile = game.board.getAvailableSpacesOnLand(player).length > 0;
    return meetsTagRequirements && canPlaceTile;
};
oAllCards.Plantation.play = function (player, game) {
    return new SelectSpace('Select space for greenery tile', game.board.getAvailableSpacesForGreenery(player), function (space) {
        return game.addGreenery(player, space.id);
    });
};

oAllCards.PowerGrid.play = function (player) {
    player.addProduction(Resources.ENERGY, 1 + player.getTagCount(Tags.ENERGY));
    return undefined;
};

oAllCards.PowerInfrastructure.play = function (_player, _game) {
    return undefined;
};
oAllCards.PowerInfrastructure.canAct = function (player) {
    return player.energy > 0;
};
oAllCards.PowerInfrastructure.action = function (player, game) {
    return new SelectAmount('Select amount of energy to spend', 'Spend energy', function (amount) {
        player.energy -= amount;
        player.megaCredits += amount;
        LogHelper.logGainStandardResource(game, player, Resources.MEGACREDITS, amount);
        return undefined;
    }, 1, player.energy);
};

oAllCards.PowerPlant.play = function (player) {
    player.addProduction(Resources.ENERGY);
    return undefined;
};

oAllCards.PowerSupplyConsortium.canPlay = function (player) {
    return player.getTagCount(Tags.ENERGY) >= 2;
};
oAllCards.PowerSupplyConsortium.play = function (player, game) {
    player.addProduction(Resources.ENERGY);
    game.defer(new DecreaseAnyProduction(player, game, Resources.ENERGY, 1));
    return undefined;
};

oAllCards.Predators.resourceType = ResourceType.ANIMAL,
oAllCards.Predators.resourceCount = 0;
coAllCards.Predators.anPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 11);
};
oAllCards.Predators.getVictoryPoints = function () {
    return this.resourceCount;
};
oAllCards.Predators.play = function () {
    return undefined;
};
oAllCards.Predators.canAct = function (player, game) {
    if (game.isSoloMode())
        return true;
    return RemoveResourcesFromCard.getAvailableTargetCards(player, game, ResourceType.ANIMAL).length > 0;
};
oAllCards.Predators.action = function (player, game) {
    var _this = this;
    game.defer(new RemoveResourcesFromCard(player, game, ResourceType.ANIMAL));
    game.defer(new DeferredAction(player, function () {
        player.addResourceTo(_this);
        return undefined;
    }));
    return undefined;
};

oAllCards.ProtectedHabitats.play = function (_player, _game) {
    return undefined;
};

oAllCards.ProtectedValley.play = function (player, game) {
    return new SelectSpace('Select space reserved for ocean to place greenery tile', game.board.getAvailableSpacesForOcean(player), function (space) {
        player.addProduction(Resources.MEGACREDITS, 2);
        return game.addGreenery(player, space.id, SpaceType.OCEAN);
    });
};

oAllCards.QuantumExtractor.canPlay = function (player) {
    return player.getTagCount(Tags.SCIENCE) >= 4;
};
oAllCards.QuantumExtractor.getCardDiscount = function (_player, _game, card) {
    if (card.tags.indexOf(Tags.SPACE) !== -1) {
        return 2;
    }
    return 0;
};
oAllCards.QuantumExtractor.play = function (player) {
    player.addProduction(Resources.ENERGY, 4);
    return undefined;
};

oAllCards.RadChemFactory.canPlay = function (player, game) {
    var hasEnergyProduction = player.getProduction(Resources.ENERGY) >= 1;
    return hasEnergyProduction;
};
oAllCards.RadChemFactory.play = function (player, game) {
    player.addProduction(Resources.ENERGY, -1);
    player.increaseTerraformRatingSteps(2, game);
    return undefined;
};

oAllCards.RadSuits.canPlay = function (_player, game) {
    return game.getCitiesInPlay() >= 2;
};
oAllCards.RadSuits.play = function (player, game) {
    if (game.getCitiesInPlay() < 2) {
        throw 'Must have 2 cities in play';
    }
    player.addProduction(Resources.MEGACREDITS);
    return undefined;
};
oAllCards.RadSuits.getVictoryPoints = function () {
    return 1;
};

oAllCards.RegolithEaters.resourceType = ResourceType.MICROBE,
oAllCards.RegolithEaters.resourceCount = 0;
oAllCards.RegolithEaters.play = function (_player, _game) {
    return undefined;
};
oAllCards.RegolithEaters.canAct = function () {
    return true;
};
oAllCards.RegolithEaters.action = function (player, game) {
    var _this = this;
    if (this.resourceCount < 2) {
        player.addResourceTo(this);
        LogHelper.logAddResource(game, player, this);
        return undefined;
    }
    var orOptions = new OrOptions();
        orOptions.options.push(new SelectOption('Remove 2 microbes to raise oxygen level 1 step', 'Remove microbes', function () {
            player.removeResourceFrom(_this, 2);
            LogHelper.logRemoveResource(game, player, _this, 2, 'raise oxygen 1 step');
            return game.increaseOxygenLevel(player, 1);
        }));
    orOptions.options.push(new SelectOption('Add 1 microbe to this card', 'Add microbe', function () {
        player.addResourceTo(_this);
        LogHelper.logAddResource(game, player, _this);
        return undefined;
    }));
    if (orOptions.options.length === 1)
        return orOptions.options[0].cb();
    return orOptions;
};

oAllCards.ReleaseOfInertGases.play = function (player, game) {
    player.increaseTerraformRatingSteps(2, game);
    return undefined;
};

oAllCards.Research.play = function (player, game) {
    for (var i = 0; i < 2; i++) {
        player.cardsInHand.push(game.dealer.dealCard());
    }
    return undefined;
};
oAllCards.Research.getVictoryPoints = function () {
    return 1;
};

oAllCards.ResearchOutpost.getAvailableSpaces = function (player, game) {
    return game.board.getAvailableSpacesOnLand(player)
        .filter(function (space) {
        var adjacentSpaces = game.board.getAdjacentSpaces(space);
        return adjacentSpaces.filter(function (space) { return space.tile !== undefined; }).length === 0;
    });
};
oAllCards.ResearchOutpost.canPlay = function (player, game) {
    return this.getAvailableSpaces(player, game).length > 0;
};
oAllCards.ResearchOutpost.getCardDiscount = function () {
    return 1;
};
oAllCards.ResearchOutpost.play = function (player, game) {
    return new SelectSpace('Select place next to no other tile for city', this.getAvailableSpaces(player, game), function (foundSpace) {
        game.addCityTile(player, foundSpace.id);
        return undefined;
    });
};

oAllCards.RestrictedArea.canPlay = function (player, game) {
    return game.board.getAvailableSpacesOnLand(player).length > 0;
};
oAllCards.RestrictedArea.play = function (player, game) {
    var _this = this;
    return new SelectSpace('Select space for tile', game.board.getAvailableSpacesOnLand(player), function (foundSpace) {
        game.addTile(player, foundSpace.spaceType, foundSpace, { tileType: TileType.RESTRICTED_AREA });
        foundSpace.adjacency = _this.adjacencyBonus;
        return undefined;
    });
};
oAllCards.RestrictedArea.canAct = function (player) {
    return player.canAfford(2);
};
oAllCards.RestrictedArea.action = function (player, game) {
    game.defer(new SelectHowToPayDeferred(player, 2, false, false, 'Select how to pay for action'));
    player.cardsInHand.push(game.dealer.dealCard());
    return undefined;
};

oAllCards.RoboticWorkforce.miningSteelProduction = 0;
oAllCards.RoboticWorkforce.miningTitaniumProduction = 0;
oAllCards.RoboticWorkforce.solarFarmEnergyProduction = 0;
oAllCards.RoboticWorkforce.builderCardsNames = [
    CardName.AI_CENTRAL,
    CardName.ASTEROID_DEFLECTION_SYSTEM,
    CardName.BIOFERTILIZER_FACILITY,
    CardName.BIOMASS_COMBUSTORS,
    CardName.BUILDING_INDUSTRIES,
    CardName.CAPITAL,
    CardName.CAPITAL_ARES,
    CardName.CARBONATE_PROCESSING,
    CardName.COMMERCIAL_DISTRICT,
    CardName.COMMERCIAL_DISTRICT_ARES,
    CardName.CORPORATE_STRONGHOLD,
    CardName.CULTURAL_METROPOLIS,
    CardName.CUPOLA_CITY,
    CardName.DEEP_WELL_HEATING,
    CardName.DOMED_CRATER,
    CardName.DOME_FARMING,
    CardName.EARLY_SETTLEMENT,
    CardName.ELECTRO_CATAPULT,
    CardName.EOS_CHASMA_NATIONAL_PARK,
    CardName.FIELD_CAPPED_CITY,
    CardName.FOOD_FACTORY,
    CardName.FUELED_GENERATORS,
    CardName.FUEL_FACTORY,
    CardName.FUSION_POWER,
    CardName.GEOTHERMAL_POWER,
    CardName.GHG_FACTORIES,
    CardName.GREAT_DAM,
    CardName.GREAT_DAM_PROMO,
    CardName.GYROPOLIS,
    CardName.HEAT_TRAPPERS,
    CardName.HOUSE_PRINTING,
    CardName.IMMIGRANT_CITY,
    CardName.INDUSTRIAL_MICROBES,
    CardName.LAVA_TUBE_SETTLEMENT,
    CardName.MAGNETIC_FIELD_DOME,
    CardName.MAGNETIC_FIELD_GENERATORS,
    CardName.MAGNETIC_FIELD_GENERATORS_PROMO,
    CardName.MARTIAN_INDUSTRIES,
    CardName.MARTIAN_MEDIA_CENTER,
    CardName.MEDICAL_LAB,
    CardName.MINE,
    CardName.MINING_AREA,
    CardName.MINING_AREA_ARES,
    CardName.MINING_OPERATIONS,
    CardName.MINING_QUOTA,
    CardName.MINING_RIGHTS,
    CardName.MINING_RIGHTS_ARES,
    CardName.MOHOLE,
    CardName.MOHOLE_AREA,
    CardName.MOHOLE_AREA_ARES,
    CardName.MOHOLE_EXCAVATION,
    CardName.NATURAL_PRESERVE,
    CardName.NATURAL_PRESERVE_ARES,
    CardName.NOCTIS_CITY,
    CardName.NOCTIS_FARMING,
    CardName.NUCLEAR_POWER,
    CardName.OCEAN_CITY,
    CardName.OCEAN_FARM,
    CardName.OPEN_CITY,
    CardName.PARLIAMENT_HALL,
    CardName.PEROXIDE_POWER,
    CardName.POLAR_INDUSTRIES,
    CardName.POWER_PLANT,
    CardName.PROTECTED_VALLEY,
    CardName.RAD_CHEM_FACTORY,
    CardName.SELF_SUFFICIENT_SETTLEMENT,
    CardName.SOIL_FACTORY,
    CardName.SOLAR_FARM,
    CardName.SOLAR_POWER,
    CardName.SPACE_ELEVATOR,
    CardName.SPACE_PORT,
    CardName.SPINOFF_DEPARTMENT,
    CardName.SPONSORED_MOHOLE,
    CardName.STRIP_MINE,
    CardName.TECTONIC_STRESS_POWER,
    CardName.TITANIUM_MINE,
    CardName.TROPICAL_RESORT,
    CardName.UNDERGROUND_CITY,
    CardName.URBANIZED_AREA,
    CardName.WINDMILLS,
];
oAllCards.RoboticWorkforce.corporationCardsNames = [
    CardName.CHEUNG_SHING_MARS,
    CardName.FACTORUM,
    CardName.MANUTECH,
    CardName.MINING_GUILD,
    CardName.RECYCLON,
    CardName.UTOPIA_INVEST,
];
oAllCards.RoboticWorkforce.canPlay = function (player, game) {
    return this.getAvailableCards(player, game).length > 0;
};
oAllCards.RoboticWorkforce.getAvailableCards = function (player, game) {
    var _this = this;
    var availableCards = player.playedCards.filter(function (card) {
        if (card.name === CardName.BIOMASS_COMBUSTORS) {
            if (game.someoneHasResourceProduction(Resources.PLANTS, 1)) {
                return true;
            }
        }
        else if (card.name === CardName.MAGNETIC_FIELD_GENERATORS || card.name === CardName.MAGNETIC_FIELD_GENERATORS_PROMO) {
            if (player.getProduction(Resources.ENERGY) >= 4) {
                return true;
            }
        }
        else if (card.name === CardName.TROPICAL_RESORT) {
            if (player.getProduction(Resources.HEAT) >= 2) {
                return true;
            }
        }
        else if (card.name === CardName.CAPITAL ||
            card.name === CardName.CAPITAL_ARES ||
            card.name === CardName.GYROPOLIS ||
            card.name === CardName.MAGNETIC_FIELD_DOME ||
            card.name === CardName.STRIP_MINE ||
            card.name === CardName.UNDERGROUND_CITY) {
            if (player.getProduction(Resources.ENERGY) >= 2) {
                return true;
            }
        }
        else if (card.name === CardName.AI_CENTRAL ||
            card.name === CardName.ASTEROID_DEFLECTION_SYSTEM ||
            card.name === CardName.BUILDING_INDUSTRIES ||
            card.name === CardName.CARBONATE_PROCESSING ||
            card.name === CardName.COMMERCIAL_DISTRICT ||
            card.name === CardName.COMMERCIAL_DISTRICT_ARES ||
            card.name === CardName.CORPORATE_STRONGHOLD ||
            card.name === CardName.CULTURAL_METROPOLIS ||
            card.name === CardName.CUPOLA_CITY ||
            card.name === CardName.DOMED_CRATER ||
            card.name === CardName.ELECTRO_CATAPULT ||
            card.name === CardName.FUEL_FACTORY ||
            card.name === CardName.GHG_FACTORIES ||
            card.name === CardName.IMMIGRANT_CITY ||
            card.name === CardName.LAVA_TUBE_SETTLEMENT ||
            card.name === CardName.NOCTIS_CITY ||
            card.name === CardName.OCEAN_CITY ||
            card.name === CardName.OPEN_CITY ||
            card.name === CardName.RAD_CHEM_FACTORY ||
            card.name === CardName.SOIL_FACTORY ||
            card.name === CardName.SPACE_PORT ||
            card.name === CardName.URBANIZED_AREA) {
            if (player.getProduction(Resources.ENERGY) >= 1) {
                return true;
            }
        }
        else if (card.name === CardName.HEAT_TRAPPERS) {
            if (game.someoneHasResourceProduction(Resources.HEAT, 2)) {
                return true;
            }
        }
        else if (card.name === CardName.PEROXIDE_POWER || card.name === CardName.FUELED_GENERATORS) {
            if (player.getProduction(Resources.MEGACREDITS) >= -4) {
                return true;
            }
        }
        else if (card.name === CardName.NUCLEAR_POWER) {
            if (player.getProduction(Resources.MEGACREDITS) >= -3) {
                return true;
            }
        }
        else if (card.name === CardName.FOOD_FACTORY) {
            if (player.getProduction(Resources.PLANTS) >= 1) {
                return true;
            }
        }
        else if (_this.builderCardsNames.includes(card.name)) {
            return true;
        }
        return false;
    });
    if (player.corporationCard !== undefined && this.corporationCardsNames.includes(player.corporationCard.name)) {
        availableCards.push(player.corporationCard);
    }
    return availableCards;
};
oAllCards.RoboticWorkforce.play = function (player, game) {
    var _this = this;
    var availableCards = this.getAvailableCards(player, game);
    if (availableCards.length === 0) {
        return undefined;
    }
    return new SelectCard('Select builder card to copy', 'Copy', availableCards, function (selectedCards) {
        var foundCard = selectedCards[0];
        switch (foundCard.name) {
            case CardName.BIOMASS_COMBUSTORS:
                player.addProduction(Resources.ENERGY, 2);
                game.defer(new DecreaseAnyProduction(player, game, Resources.PLANTS, 1));
                return undefined;
            case CardName.HEAT_TRAPPERS:
                player.addProduction(Resources.ENERGY, 1);
                game.defer(new DecreaseAnyProduction(player, game, Resources.HEAT, 2));
                return undefined;
            case CardName.MINING_AREA:
            case CardName.MINING_AREA_ARES:
            case CardName.MINING_RIGHTS:
            case CardName.MINING_RIGHTS_ARES:
                var bonusResource = foundCard.bonusResource;
                if (bonusResource !== undefined && bonusResource === Resources.STEEL) {
                    _this.miningSteelProduction++;
                }
                if (bonusResource !== undefined && bonusResource === Resources.TITANIUM) {
                    _this.miningTitaniumProduction++;
                }
                break;
        }
        function Updater(name) {
            function Objectify (name, energyProduction, megaCreditProduction, steelProduction, titaniumProduction, plantProduction, heatProduction) {
                return {
                    name : name,
                    energyProduction : energyProduction,
                    megaCreditProduction : megaCreditProduction,
                    steelProduction : steelProduction,
                    titaniumProduction : titaniumProduction,
                    plantProduction : plantProduction,
                    heatProduction : heatProduction}
            }
            switch (name) {
                case CardName.AI_CENTRAL:  return Objectify("AI_CENTRAL",-1, 0, 0, 0, 0, 0);
                case CardName.ASTEROID_DEFLECTION_SYSTEM:  return Objectify("ASTEROID_DEFLECTION_SYSTEM",-1, 0, 0, 0, 0, 0);
                case CardName.BIOFERTILIZER_FACILITY:  return Objectify("BIOFERTILIZER_FACILITY",0, 0, 0, 0, 1, 0);
                case CardName.BUILDING_INDUSTRIES:  return Objectify("BUILDING_INDUSTRIES",-1, 0, 2, 0, 0, 0);
                case CardName.CAPITAL:  return Objectify("CAPITAL",-2, 5, 0, 0, 0, 0);
                case CardName.CAPITAL_ARES:  return Objectify("CAPITAL_ARES",-2, 5, 0, 0, 0, 0);
                case CardName.CARBONATE_PROCESSING:  return Objectify("CARBONATE_PROCESSING",-1, 0, 0, 0, 0, 3);
                case CardName.CHEUNG_SHING_MARS:  return Objectify("CHEUNG_SHING_MARS",0, 3, 0, 0, 0, 0);
                case CardName.COMMERCIAL_DISTRICT:  return Objectify("COMMERCIAL_DISTRICT",-1, 4, 0, 0, 0, 0);
                case CardName.COMMERCIAL_DISTRICT_ARES:  return Objectify("COMMERCIAL_DISTRICT_ARES",-1, 4, 0, 0, 0, 0);
                case CardName.CORPORATE_STRONGHOLD:  return Objectify("CORPORATE_STRONGHOLD",-1, 3, 0, 0, 0, 0);
                case CardName.CULTURAL_METROPOLIS:  return Objectify("CULTURAL_METROPOLIS",-1, 3, 0, 0, 0, 0);
                case CardName.CUPOLA_CITY:  return Objectify("CUPOLA_CITY",-1, 3, 0, 0, 0, 0);
                case CardName.DEEP_WELL_HEATING:  return Objectify("DEEP_WELL_HEATING",1, 0, 0, 0, 0, 0);
                case CardName.DOMED_CRATER:  return Objectify("DOMED_CRATER",-1, 3, 0, 0, 0, 0);
                case CardName.DOME_FARMING:  return Objectify("DOME_FARMING",0, 2, 0, 0, 1, 0);
                case CardName.EARLY_SETTLEMENT:  return Objectify("EARLY_SETTLEMENT",0, 0, 0, 0, 1, 0);
                case CardName.ELECTRO_CATAPULT:  return Objectify("ELECTRO_CATAPULT",-1, 0, 0, 0, 0, 0);
                case CardName.EOS_CHASMA_NATIONAL_PARK:  return Objectify("EOS_CHASMA_NATIONAL_PARK",2, 0, 0, 0, 0, 0);
                case CardName.FACTORUM:  return Objectify("FACTORUM",0, 0, 1, 0, 0, 0);
                case CardName.FIELD_CAPPED_CITY:  return Objectify("FIELD_CAPPED_CITY",1, 2, 0, 0, 0, 0);
                case CardName.FOOD_FACTORY:  return Objectify("FOOD_FACTORY",0, 4, 0, 0, -1, 0);
                case CardName.FUELED_GENERATORS:  return Objectify("FUELED_GENERATORS",1, -1, 0, 0, 0, 0);
                case CardName.FUEL_FACTORY:  return Objectify("FUEL_FACTORY",-1, 1, 0, 1, 0, 0);
                case CardName.FUSION_POWER:  return Objectify("FUSION_POWER",3, 0, 0, 0, 0, 0);
                case CardName.GEOTHERMAL_POWER:  return Objectify("GEOTHERMAL_POWER",2, 0, 0, 0, 0, 0);
                case CardName.GHG_FACTORIES:  return Objectify("GHG_FACTORIES",-1, 0, 0, 0, 0, 4);
                case CardName.GREAT_DAM:  return Objectify("GREAT_DAM",2, 0, 0, 0, 0, 0);
                case CardName.GREAT_DAM_PROMO:  return Objectify("GREAT_DAM_PROMO",2, 0, 0, 0, 0, 0);
                case CardName.GYROPOLIS:  return Objectify("GYROPOLIS",-2, player.getMultipleTagCount([Tags.VENUS, Tags.EARTH]), 0, 0, 0, 0);
                case CardName.HOUSE_PRINTING:  return Objectify("HOUSE_PRINTING",0, 0, 1, 0, 0, 0);
                case CardName.IMMIGRANT_CITY:  return Objectify("IMMIGRANT_CITY",-1, -2, 0, 0, 0, 0);
                case CardName.INDUSTRIAL_MICROBES:  return Objectify("INDUSTRIAL_MICROBES",1, 0, 1, 0, 0, 0);
                case CardName.LAVA_TUBE_SETTLEMENT:  return Objectify("LAVA_TUBE_SETTLEMENT",-1, 2, 0, 0, 0, 0);
                case CardName.MAGNETIC_FIELD_DOME:  return Objectify("MAGNETIC_FIELD_DOME",-2, 0, 0, 0, 1, 0);
                case CardName.MAGNETIC_FIELD_GENERATORS:  return Objectify("MAGNETIC_FIELD_GENERATORS",-4, 0, 0, 0, 2, 0);
                case CardName.MAGNETIC_FIELD_GENERATORS_PROMO:  return Objectify("MAGNETIC_FIELD_GENERATORS_PROMO",-4, 0, 0, 0, 2, 0);
                case CardName.MANUTECH:  return Objectify("MANUTECH",0, 0, 1, 0, 0, 0);
                case CardName.MARTIAN_INDUSTRIES:  return Objectify("MARTIAN_INDUSTRIES",1, 0, 1, 0, 0, 0);
                case CardName.MARTIAN_MEDIA_CENTER:  return Objectify("MARTIAN_MEDIA_CENTER",0, 2, 0, 0, 0, 0);
                case CardName.MEDICAL_LAB:  return Objectify("MEDICAL_LAB",0, Math.floor(player.getTagCount(Tags.BUILDING) / 2), 0, 0, 0, 0);
                case CardName.MINE:  return Objectify("MINE",0, 0, 1, 0, 0, 0);
                case CardName.MINING_AREA:  return Objectify("MINING_AREA",0, 0, _this.miningSteelProduction, _this.miningTitaniumProduction, 0, 0);
                case CardName.MINING_AREA_ARES:  return Objectify("MINING_AREA_ARES",0, 0, _this.miningSteelProduction, _this.miningTitaniumProduction, 0, 0);
                case CardName.MINING_GUILD:  return Objectify("MINING_GUILD",0, 0, 1, 0, 0, 0);
                case CardName.MINING_OPERATIONS:  return Objectify("MINING_OPERATIONS",0, 0, 2, 0, 0, 0);
                case CardName.MINING_QUOTA:  return Objectify("MINING_QUOTA",0, 0, 2, 0, 0, 0);
                case CardName.MINING_RIGHTS:  return Objectify("MINING_RIGHTS",0, 0, _this.miningSteelProduction, _this.miningTitaniumProduction, 0, 0);
                case CardName.MINING_RIGHTS_ARES:  return Objectify("MINING_RIGHTS_ARES",0, 0, _this.miningSteelProduction, _this.miningTitaniumProduction, 0, 0);
                case CardName.MOHOLE:  return Objectify("MOHOLE",0, 0, 0, 0, 0, 3);
                case CardName.MOHOLE_AREA:  return Objectify("MOHOLE_AREA",0, 0, 0, 0, 0, 4);
                case CardName.MOHOLE_AREA_ARES:  return Objectify("MOHOLE_AREA_ARES",0, 0, 0, 0, 0, 4);
                case CardName.MOHOLE_EXCAVATION:  return Objectify("MOHOLE_EXCAVATION",0, 0, 1, 0, 0, 2);
                case CardName.NATURAL_PRESERVE:  return Objectify("NATURAL_PRESERVE",1, 0, 0, 0, 0, 0);
                case CardName.NATURAL_PRESERVE_ARES:  return Objectify("NATURAL_PRESERVE_ARES",1, 0, 0, 0, 0, 0);
                case CardName.NOCTIS_CITY:  return Objectify("NOCTIS_CITY",-1, 3, 0, 0, 0, 0);
                case CardName.NOCTIS_FARMING:  return Objectify("NOCTIS_FARMING",0, 1, 0, 0, 0, 0);
                case CardName.NUCLEAR_POWER:  return Objectify("NUCLEAR_POWER",3, -2, 0, 0, 0, 0);
                case CardName.OCEAN_CITY:  return Objectify("OCEAN_CITY",-1, 3, 0, 0, 0, 0);
                case CardName.OCEAN_FARM:  return Objectify("OCEAN_FARM",0, 0, 0, 0, 1, 1);
                case CardName.OPEN_CITY:  return Objectify("OPEN_CITY",-1, 4, 0, 0, 0, 0);
                case CardName.PARLIAMENT_HALL:  return Objectify("PARLIAMENT_HALL",0, Math.floor(player.getTagCount(Tags.BUILDING) / 3), 0, 0, 0, 0);
                case CardName.PEROXIDE_POWER:  return Objectify("PEROXIDE_POWER",2, -1, 0, 0, 0, 0);
                case CardName.POLAR_INDUSTRIES:  return Objectify("POLAR_INDUSTRIES",0, 0, 0, 0, 0, 2);
                case CardName.POWER_PLANT:  return Objectify("POWER_PLANT",1, 0, 0, 0, 0, 0);
                case CardName.PROTECTED_VALLEY:  return Objectify("PROTECTED_VALLEY",0, 2, 0, 0, 0, 0);
                case CardName.RAD_CHEM_FACTORY:  return Objectify("RAD_CHEM_FACTORY",-1, 0, 0, 0, 0, 0);
                case CardName.RECYCLON:  return Objectify("RECYCLON",0, 0, 1, 0, 0, 0);
                case CardName.SELF_SUFFICIENT_SETTLEMENT:  return Objectify("SELF_SUFFICIENT_SETTLEMENT",0, 2, 0, 0, 0, 0);
                case CardName.SOIL_FACTORY:  return Objectify("SOIL_FACTORY",-1, 0, 0, 0, 1, 0);
                case CardName.SOLAR_FARM:  return Objectify("SOLAR_FARM",_this.solarFarmEnergyProduction, 0, 0, 0, 0, 0);
                case CardName.SOLAR_POWER:  return Objectify("SOLAR_POWER",1, 0, 0, 0, 0, 0);
                case CardName.SPACE_ELEVATOR:  return Objectify("SPACE_ELEVATOR",0, 0, 0, 1, 0, 0);
                case CardName.SPACE_PORT:  return Objectify("SPACE_PORT",-1, 4, 0, 0, 0, 0);
                case CardName.SPINOFF_DEPARTMENT:  return Objectify("SPINOFF_DEPARTMENT",0, 2, 0, 0, 0, 0);
                case CardName.SPONSORED_MOHOLE:  return Objectify("SPONSORED_MOHOLE",0, 0, 0, 0, 0, 2);
                case CardName.STRIP_MINE:  return Objectify("STRIP_MINE",-2, 0, 2, 1, 0, 0);
                case CardName.TECTONIC_STRESS_POWER:  return Objectify("TECTONIC_STRESS_POWER",3, 0, 0, 0, 0, 0);
                case CardName.TITANIUM_MINE:  return Objectify("TITANIUM_MINE",0, 0, 0, 1, 0, 0);
                case CardName.TROPICAL_RESORT:  return Objectify("TROPICAL_RESORT",0, 3, 0, 0, 0, -2);
                case CardName.UNDERGROUND_CITY:  return Objectify("UNDERGROUND_CITY",-2, 0, 2, 0, 0, 0);
                case CardName.URBANIZED_AREA:  return Objectify("URBANIZED_AREA",-1, 2, 0, 0, 0, 0);
                case CardName.UTOPIA_INVEST:  return Objectify("UTOPIA_INVEST",0, 0, 1, 1, 0, 0);
                case CardName.WINDMILLS:  return Objectify("WINDMILLS",1, 0, 0, 0, 0, 0);
            }
        }
        var result = Updater(foundCard.name);
        if (!result) {
            throw 'Production not found for selected card';
        }
        if (player.getProduction(Resources.ENERGY) + result.energyProduction < 0) {
            throw 'not enough energy production';
        }
        if (player.getProduction(Resources.TITANIUM) + result.titaniumProduction < 0) {
            throw 'not enough titanium production';
        }
        if (player.getProduction(Resources.PLANTS) + result.plantProduction < 0) {
            throw 'not enough plant production';
        }
        if (player.getProduction(Resources.HEAT) + result.heatProduction < 0) {
            throw 'not enough heat production';
        }
        player.addProduction(Resources.ENERGY, result.energyProduction);
        player.addProduction(Resources.MEGACREDITS, result.megaCreditProduction);
        player.addProduction(Resources.STEEL, result.steelProduction);
        player.addProduction(Resources.TITANIUM, result.titaniumProduction);
        player.addProduction(Resources.PLANTS, result.plantProduction);
        player.addProduction(Resources.HEAT, result.heatProduction);
        game.log('${0} copied ${1} production with ${2}', function (b) {
            return b.player(player).cardName(result.name).card(_this);
        });
        return undefined;
    });
};

oAllCards.RoverConstruction.onTilePlaced = function (player, space) {
    if (Board.isCitySpace(space)) {
        player.megaCredits += 2;
    }
};
oAllCards.RoverConstruction.play = function () {
    return undefined;
};
oAllCards.RoverConstruction.getVictoryPoints = function () {
    return 1;
};

oAllCards.Sabotage.play = function (player, game) {
    if (game.isSoloMode())
        return undefined;
    var availablePlayerTargets = game.getPlayers().filter(function (p) { return p.id !== player.id; });
    var availableActions = new OrOptions();
    availablePlayerTargets.forEach(function (target) {
        if (target.titanium > 0) {
            var amountRemoved = Math.min(3, target.titanium);
            var optionTitle = 'Remove ' + amountRemoved + ' titanium from ' + target.name;
            availableActions.options.push(new SelectOption(optionTitle, 'Confirm', function () {
                target.setResource(Resources.TITANIUM, -3, game, player);
                return undefined;
            }));
        }
        if (target.steel > 0) {
            var amountRemoved = Math.min(4, target.steel);
            var optionTitle = 'Remove ' + amountRemoved + ' steel from ' + target.name;
            availableActions.options.push(new SelectOption(optionTitle, 'Confirm', function () {
                target.setResource(Resources.STEEL, -4, game, player);
                return undefined;
            }));
        }
        if (target.megaCredits > 0) {
            var amountRemoved = Math.min(7, target.megaCredits);
            var optionTitle = 'Remove ' + amountRemoved + ' MC from ' + target.name;
            availableActions.options.push(new SelectOption(optionTitle, 'Confirm', function () {
                target.setResource(Resources.MEGACREDITS, -7, game, player);
                return undefined;
            }));
        }
    });
    if (availableActions.options.length > 0)
        return availableActions;
    return undefined;
};

oAllCards.Satellites.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 1 + player.getTagCount(Tags.SPACE));
    return undefined;
};

oAllCards.SearchForLife.resourceType = ResourceType.SCIENCE,
oAllCards.SearchForLife.resourceCount = 0;
oAllCards.SearchForLife.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.OXYGEN, 6);
};
oAllCards.SearchForLife.getVictoryPoints = function () {
    if (this.resourceCount > 0) {
        return 3;
    }
    return 0;
};
oAllCards.SearchForLife.play = function () {
    return undefined;
};
oAllCards.SearchForLife.canAct = function (player) {
    return player.canAfford(1);
};
oAllCards.SearchForLife.action = function (player, game) {
    var topCard = game.dealer.dealCard();
    if (topCard.tags.indexOf(Tags.MICROBE) !== -1) {
        this.resourceCount++;
        game.log('${0} found life!', function (b) { return b.player(player); });
    }
    game.log('${0} revealed and discarded ${1}', function (b) { return b.player(player).card(topCard); });
    game.dealer.discard(topCard);
    game.defer(new SelectHowToPayDeferred(player, 1, false, false, 'Select how to pay for action'));
    return undefined;
};

oAllCards.SecurityFleet.resourceType = ResourceType.FIGHTER,
oAllCards.SecurityFleet.resourceCount = 0;
oAllCards.SecurityFleet.getVictoryPoints = function () {
    return this.resourceCount;
};
oAllCards.SecurityFleet.play = function () {
    return undefined;
};
oAllCards.SecurityFleet.canAct = function (player) {
    return player.titanium > 0;
};
oAllCards.SecurityFleet.action = function (player) {
    player.titanium--;
    this.resourceCount++;
    return undefined;
};

oAllCards.Shuttles.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 5) && player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.Shuttles.getCardDiscount = function (_player, _game, card) {
    if (card.tags.indexOf(Tags.SPACE) !== -1) {
        return 2;
    }
    return 0;
};
oAllCards.Shuttles.play = function (player) {
    player.addProduction(Resources.ENERGY, -1);
    player.addProduction(Resources.MEGACREDITS, 2);
    return undefined;
};
oAllCards.Shuttles.getVictoryPoints = function () {
    return 1;
};

oAllCards.SmallAnimals.resourceType = ResourceType.ANIMAL,
oAllCards.SmallAnimals.resourceCount = 0;
oAllCards.SmallAnimals.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 6) && game.someoneHasResourceProduction(Resources.PLANTS, 1);
};
oAllCards.SmallAnimals.getVictoryPoints = function () {
    return Math.floor(this.resourceCount / 2);
};
oAllCards.SmallAnimals.play = function (player, game) {
    game.defer(new DecreaseAnyProduction(player, game, Resources.PLANTS, 1));
    return undefined;
};
oAllCards.SmallAnimals.canAct = function () {
    return true;
};
oAllCards.SmallAnimals.action = function (player) {
    player.addResourceTo(this);
    return undefined;
};

oAllCards.SoilFactory.canPlay = function (player) {
    return player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.SoilFactory.play = function (player) {
    player.addProduction(Resources.ENERGY, -1);
    player.addProduction(Resources.PLANTS);
    return undefined;
};
oAllCards.SoilFactory.getVictoryPoints = function () {
    return 1;
};

oAllCards.SolarPower.play = function (player) {
    player.addProduction(Resources.ENERGY);
    return undefined;
};
oAllCards.SolarPower.getVictoryPoints = function () {
    return 1;
};

oAllCards.SolarWindPower.play = function (player) {
    player.addProduction(Resources.ENERGY);
    player.titanium += 2;
    return undefined;
};

oAllCards.Soletta.play = function (player, _game) {
    player.addProduction(Resources.HEAT, 7);
    return undefined;
};

oAllCards.SpaceElevator.play = function (player, _game) {
    player.addProduction(Resources.TITANIUM);
    return undefined;
};
oAllCards.SpaceElevator.canAct = function (player) {
    return player.steel > 0;
};
oAllCards.SpaceElevator.action = function (player, _game) {
    player.steel--;
    player.megaCredits += 5;
    return undefined;
};
oAllCards.SpaceElevator.getVictoryPoints = function () {
    return 2;
};

oAllCards.SpaceMirrors.play = function () {
    return undefined;
};
oAllCards.SpaceMirrors.canAct = function (player) {
    return player.canAfford(7);
};
oAllCards.SpaceMirrors.action = function (player, game) {
    game.defer(new SelectHowToPayDeferred(player, 7, false, false, 'Select how to pay for action'));
    player.addProduction(Resources.ENERGY);
    return undefined;
};

oAllCards.SpaceStation.getCardDiscount = function (_player, _game, card) {
    if (card.tags.indexOf(Tags.SPACE) !== -1) {
        return 2;
    }
    return 0;
};
oAllCards.SpaceStation.play = function () {
    return undefined;
};
oAllCards.SpaceStation.getVictoryPoints = function () {
    return 1;
};

oAllCards.SpecialDesign.getRequirementBonus = function (player, _game) {
    if (player.lastCardPlayed !== undefined && player.lastCardPlayed.name === this.name) {
        return 2;
    }
    return 0;
};
oAllCards.SpecialDesign.play = function () {
    return undefined;
};

oAllCards.Sponsors.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 2);
    return undefined;
};

oAllCards.StandardTechnology.onStandardProject = function (player, projectType) {
    if (projectType.name !== CardName.STANDARD_SELL_PATENTS) {
        player.megaCredits += 3;
    }
};
oAllCards.StandardTechnology.play = function () {
    return undefined;
};

oAllCards.Steelworks.canAct = function (player, game) {
    var hasEnoughEnergy = player.energy >= 4;
    return hasEnoughEnergy;
};
oAllCards.Steelworks.action = function (player, game) {
    player.energy -= 4;
    player.steel += 2;
    return game.increaseOxygenLevel(player, 1);
};
oAllCards.Steelworks.play = function () {
    return undefined;
};

oAllCards.StripMine.canPlay = function (player, game) {
    var hasEnergyProduction = player.getProduction(Resources.ENERGY) >= 2;
    return hasEnergyProduction;
};
oAllCards.StripMine.play = function (player, game) {
    player.addProduction(Resources.ENERGY, -2);
    player.addProduction(Resources.STEEL, 2);
    player.addProduction(Resources.TITANIUM);
    return game.increaseOxygenLevel(player, 2);
};

oAllCards.SubterraneanReservoir.play = function (player, game) {
    game.defer(new PlaceOceanTile(player, game));
    return undefined;
};

oAllCards.SymbioticFungus.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -14);
};
oAllCards.SymbioticFungus.play = function () {
    return undefined;
};
oAllCards.SymbioticFungus.canAct = function () {
    return true;
};
oAllCards.SymbioticFungus.action = function (player, game) {
    var availableCards = player.getResourceCards(ResourceType.MICROBE);
    if (availableCards.length === 0)
        return undefined;
    if (availableCards.length === 1) {
        player.addResourceTo(availableCards[0]);
        LogHelper.logAddResource(game, player, availableCards[0]);
        return undefined;
    }
    return new SelectCard('Select card to add microbe', 'Add microbe', availableCards, function (foundCards) {
        player.addResourceTo(foundCards[0]);
        LogHelper.logAddResource(game, player, foundCards[0]);
        return undefined;
    });
};

oAllCards.Tardigrades.resourceType = ResourceType.MICROBE,
oAllCards.Tardigrades.resourceCount = 0;
oAllCards.Tardigrades.getVictoryPoints = function () {
    return Math.floor(this.resourceCount / 4);
};
oAllCards.Tardigrades.play = function () {
    return undefined;
};
oAllCards.Tardigrades.action = function (player) {
    player.addResourceTo(this);
    return undefined;
};
oAllCards.Tardigrades.canAct = function () {
    return true;
};

oAllCards.TechnologyDemonstration.play = function (player, game) {
    for (var i = 0; i < 2; i++) {
        player.cardsInHand.push(game.dealer.dealCard());
    }
    return undefined;
};

oAllCards.TectonicStressPower.canPlay = function (player) {
    return player.getTagCount(Tags.SCIENCE) >= 2;
};
oAllCards.TectonicStressPower.play = function (player) {
    if (player.getTagCount(Tags.SCIENCE) < 2) {
        throw 'Requires 2 science tags';
    }
    player.addProduction(Resources.ENERGY, 3);
    return undefined;
};
oAllCards.TectonicStressPower.getVictoryPoints = function () {
    return 1;
};

oAllCards.TerraformingGanymede.play = function (player, game) {
    var steps = 1 + player.getTagCount(Tags.JOVIAN);
    player.increaseTerraformRatingSteps(steps, game);
    LogHelper.logTRIncrease(game, player, steps);
    return undefined;
};
oAllCards.TerraformingGanymede.getVictoryPoints = function () {
    return 2;
};

oAllCards.TitaniumMine.play = function (player, _game) {
    player.addProduction(Resources.TITANIUM);
    return undefined;
};

oAllCards.TollStation.play = function (player, game) {
    var amount = game.getPlayers()
        .filter(function (aPlayer) { return aPlayer !== player; })
        .map(function (opponent) { return opponent.getTagCount(Tags.SPACE, false, false); })
        .reduce(function (a, c) { return a + c; }, 0);
    player.addProduction(Resources.MEGACREDITS, amount);
    return undefined;
};

oAllCards.TowingAComet.play = function (player, game) {
    game.defer(new PlaceOceanTile(player, game));
    player.plants += 2;
    return game.increaseOxygenLevel(player, 1);
};

oAllCards.TransNeptuneProbe.play = function () {
    return undefined;
};
oAllCards.TransNeptuneProbe.getVictoryPoints = function () {
    return 1;
};

oAllCards.Trees.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -4);
};
oAllCards.Trees.play = function (player) {
    player.addProduction(Resources.PLANTS, 3);
    player.plants++;
    return undefined;
};
oAllCards.Trees.getVictoryPoints = function () {
    return 1;
};

oAllCards.TropicalResort.canPlay = function (player) {
    return player.getProduction(Resources.HEAT) >= 2;
};
oAllCards.TropicalResort.play = function (player) {
    player.addProduction(Resources.HEAT, -2);
    player.addProduction(Resources.MEGACREDITS, 3);
    return undefined;
};
oAllCards.TropicalResort.getVictoryPoints = function () {
    return 2;
};

oAllCards.TundraFarming.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.TEMPERATURE, -6);
};
oAllCards.TundraFarming.play = function (player) {
    player.addProduction(Resources.PLANTS);
    player.addProduction(Resources.MEGACREDITS, 2);
    player.plants++;
    return undefined;
};
oAllCards.TundraFarming.getVictoryPoints = function () {
    return 2;
};

oAllCards.UndergroundCity.canPlay = function (player, game) {
    return player.getProduction(Resources.ENERGY) >= 2 && game.board.getAvailableSpacesForCity(player).length > 0;
};
oAllCards.UndergroundCity.play = function (player, game) {
    return new SelectSpace('Select space for city tile', game.board.getAvailableSpacesForCity(player), function (foundSpace) {
        game.addCityTile(player, foundSpace.id);
        player.addProduction(Resources.ENERGY, -2);
        player.addProduction(Resources.STEEL, 2);
        return undefined;
    });
};

oAllCards.UndergroundDetonations.canAct = function (player) {
    return player.canAfford(10);
};
oAllCards.UndergroundDetonations.action = function (player, game) {
    game.defer(new SelectHowToPayDeferred(player, 10, false, false, 'Select how to pay for action'));
    player.addProduction(Resources.HEAT, 2);
    return undefined;
};
oAllCards.UndergroundDetonations.play = function () {
    return undefined;
};

oAllCards.UrbanizedArea.getAvailableSpaces = function (player, game) {
    return game.board.getAvailableSpacesOnLand(player)
        .filter(function (space) { return game.board.getAdjacentSpaces(space).filter(function (adjacentSpace) { return Board.isCitySpace(adjacentSpace); }).length >= 2; });
};
oAllCards.UrbanizedArea.canPlay = function (player, game) {
    return player.getProduction(Resources.ENERGY) >= 1 && this.getAvailableSpaces(player, game).length > 0;
};
oAllCards.UrbanizedArea.play = function (player, game) {
    return new SelectSpace('Select space next to at least 2 other city tiles', this.getAvailableSpaces(player, game), function (foundSpace) {
        game.addCityTile(player, foundSpace.id);
        player.addProduction(Resources.ENERGY, -1);
        player.addProduction(Resources.MEGACREDITS, 2);
        return undefined;
    });
};

oAllCards.VestaShipyard.getVictoryPoints = function () {
    return 1;
};
oAllCards.VestaShipyard.play = function (player, _game) {
    player.addProduction(Resources.TITANIUM);
    return undefined;
};

oAllCards.ViralEnhancers.onCardPlayed = function (player, game, card) {
    var resourceCount = card.tags.filter(function (tag) { return tag === Tags.ANIMAL || tag === Tags.PLANT || tag === Tags.MICROBE; }).length;
    if (resourceCount === 0) {
        return undefined;
    }
    if (card.resourceType !== ResourceType.ANIMAL && card.resourceType !== ResourceType.MICROBE) {
        player.plants += resourceCount;
        return undefined;
    }
    for (var i = 0; i < resourceCount; i++) {
        game.defer(new DeferredAction(player, function () { return new OrOptions(new SelectOption('Add resource to card ' + card.name, 'Add resource', function () {
            player.addResourceTo(card);
            return undefined;
        }), new SelectOption('Gain plant', 'Save', function () {
            player.plants++;
            return undefined;
        })); }));
    }
    return undefined;
};
oAllCards.ViralEnhancers.play = function () {
    return undefined;
};

oAllCards.Virus.canPlay = function () {
    return true;
};
oAllCards.Virus.play = function (player, game) {
    var _a;
    if (game.getPlayers().length === 1) {
        return undefined;
    }
    var orOptionsAnimals = (new RemoveResourcesFromCard(player, game, ResourceType.ANIMAL, 2, false, false)).execute();
    var removeAnimals = orOptionsAnimals !== undefined ?
        orOptionsAnimals.options[0] :
        undefined;
    var orOptionsPlants = (new RemoveAnyPlants(player, game, 5)).execute();
    var removePlants = orOptionsPlants !== undefined ?
        orOptionsPlants.options.slice(0, -1) :
        undefined;
    if (removeAnimals === undefined && removePlants === undefined) {
        return undefined;
    }
    var orOptions = new OrOptions();
    if (removeAnimals !== undefined) {
        orOptions.options.push(removeAnimals);
    }
    if (removePlants !== undefined) {
        (_a = orOptions.options).push.apply(_a, removePlants);
    }
    orOptions.options.push(new SelectOption('Skip removal', 'Confirm', function () {
        return undefined;
    }));
    return orOptions;
};

oAllCards.WaterImportFromEuropa.getVictoryPoints = function (player) {
    return player.getTagCount(Tags.JOVIAN, false, false);
};
oAllCards.WaterImportFromEuropa.play = function () {
    return undefined;
};
oAllCards.WaterImportFromEuropa.canAct = function (player, game) {
    var oceanCost = 12;
    return player.canAfford(oceanCost, game, false, true);
};
oAllCards.WaterImportFromEuropa.action = function (player, game) {
    game.defer(new SelectHowToPayDeferred(player, 12, false, true, 'Select how to pay for action'));
    game.defer(new PlaceOceanTile(player, game));
    return undefined;
};

oAllCards.WaterSplittingPlant.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OCEANS, 2);
};
oAllCards.WaterSplittingPlant.play = function () {
    return undefined;
};
oAllCards.WaterSplittingPlant.canAct = function (player, game) {
    var hasEnoughEnergy = player.energy >= 3;
    return hasEnoughEnergy;
};
oAllCards.WaterSplittingPlant.action = function (player, game) {
    player.energy -= 3;
    return game.increaseOxygenLevel(player, 1);
};

oAllCards.WavePower.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OCEANS, 3);
};
oAllCards.WavePower.play = function (player) {
    player.addProduction(Resources.ENERGY);
    return undefined;
};
oAllCards.WavePower.getVictoryPoints = function () {
    return 1;
};

oAllCards.Windmills.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 7);
};
oAllCards.Windmills.play = function (player) {
    player.addProduction(Resources.ENERGY);
    return undefined;
};
oAllCards.Windmills.getVictoryPoints = function () {
    return 1;
};

oAllCards.Worms.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 4);
};
oAllCards.Worms.play = function (player) {
    player.addProduction(Resources.PLANTS, Math.floor((player.getTagCount(Tags.MICROBE) + 1) / 2));
    return undefined;
};

oAllCards.Zeppelins.canPlay = function (player, game) {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 5);
};
oAllCards.Zeppelins.play = function (player, game) {
    player.addProduction(Resources.MEGACREDITS, game.getCitiesInPlayOnMars());
    return undefined;
};
oAllCards.Zeppelins.getVictoryPoints = function () {
    return 1;
};

oAllCards.CrediCor.startingMegaCredits = 57;
oAllCards.CrediCor.effect = function (player, card) {
    if (player.corporationCard !== undefined && player.corporationCard.name === this.name && card.cost >= 20) {
        player.megaCredits += 4;
    }
};
oAllCards.CrediCor.onCardPlayed = function (player, _game, card) {
    this.effect(player, card);
};
oAllCards.CrediCor.onStandardProject = function (player, project) {
    this.effect(player, project);
};
oAllCards.CrediCor.play = function () {
    return undefined;
};

oAllCards.EcoLine.startingMegaCredits = 36;
oAllCards.EcoLine.play = function (player) {
    player.addProduction(Resources.PLANTS, 2);
    player.plants = 3;
    player.plantsNeededForGreenery = 7;
    return undefined;
};

oAllCards.Helion.startingMegaCredits = 42;
oAllCards.Helion.play = function (player) {
    player.canUseHeatAsMegaCredits = true;
    player.addProduction(Resources.HEAT, 3);
    return undefined;
};

oAllCards.InterplanetaryCinematics.startingMegaCredits = 30;
oAllCards.InterplanetaryCinematics.onCardPlayed = function (player, _game, card) {
    if (player.corporationCard !== undefined && player.corporationCard.name === this.name && card.cardType === CardType.EVENT) {
        player.megaCredits += 2;
    }
};
oAllCards.InterplanetaryCinematics.play = function (player) {
    player.steel = 20;
    return undefined;
};

oAllCards.Inventrix.startingMegaCredits = 45;
oAllCards.Inventrix.initialaction = function (player, game) {
    player.cardsInHand.push(game.dealer.dealCard(), game.dealer.dealCard(), game.dealer.dealCard());
    LogHelper.logCardChange(game, player, 'drew', 3);
    return undefined;
};
oAllCards.Inventrix.getRequirementBonus = function (_player, _game) {
    return 2;
};
oAllCards.Inventrix.play = function () {
    return undefined;
};

oAllCards.MiningGuild.startingMegaCredits = 30;
oAllCards.MiningGuild.onTilePlaced = function (player, space) {
    if (player.isCorporation(this.name) &&
        space.player === player &&
        (space.bonus.indexOf(SpaceBonus.STEEL) !== -1 || space.bonus.indexOf(SpaceBonus.TITANIUM) !== -1)) {
        player.addProduction(Resources.STEEL);
    }
};
oAllCards.MiningGuild.play = function (player) {
    player.steel = 5;
    player.addProduction(Resources.STEEL);
    return undefined;
};

oAllCards.PhoboLog.startingMegaCredits = 23;
oAllCards.PhoboLog.play = function (player, _game) {
    player.titanium = 10;
    player.increaseTitaniumValue();
    return undefined;
};

oAllCards.SaturnSystems.startingMegaCredits = 42;
oAllCards.SaturnSystems.onCardPlayed = function (_player, game, card) {
    for (var _i = 0, _a = card.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        if (tag === Tags.JOVIAN) {
            game.getCardPlayer(this.name).addProduction(Resources.MEGACREDITS);
        }
    }
};
oAllCards.SaturnSystems.onCorpCardPlayed = function (_player, game, card) {
    return this.onCardPlayed(_player, game, card);
};
oAllCards.SaturnSystems.play = function (player) {
    player.addProduction(Resources.TITANIUM);
    player.addProduction(Resources.MEGACREDITS);
    return undefined;
};

oAllCards.Teractor.startingMegaCredits = 60;
oAllCards.Teractor.getCardDiscount = function (_player, _game, card) {
    return card.tags.filter(function (tag) { return tag === Tags.EARTH; }).length * 3;
};
oAllCards.Teractor.play = function () {
    return undefined;
};

oAllCards.TharsisRepublic.startingMegaCredits = 40;
oAllCards.TharsisRepublic.initialaction = function (player, game) {
    return new SelectSpace('Select space on mars for city tile', game.board.getAvailableSpacesForCity(player), function (space) {
        game.addCityTile(player, space.id);
        game.log('${0} placed a City tile', function (b) { return b.player(player); });
        return undefined;
    });
};
oAllCards.TharsisRepublic.onTilePlaced = function (player, space) {
    if (Board.isCitySpace(space)) {
        if (space.player === player) {
            player.megaCredits += 3;
        }
        if (space.spaceType !== SpaceType.COLONY) {
            player.addProduction(Resources.MEGACREDITS);
        }
    }
};
oAllCards.TharsisRepublic.play = function (player, game) {
    if (game.getPlayers().length === 1) {
        player.addProduction(Resources.MEGACREDITS, 2);
    }
    return undefined;
};

oAllCards.Thorgate.startingMegaCredits = 48;
oAllCards.Thorgate.getCardDiscount = function (_player, _game, card) {
    if (card.tags.indexOf(Tags.ENERGY) !== -1) {
        return 3;
    }
    return 0;
};
oAllCards.Thorgate.play = function (player, _game) {
    player.addProduction(Resources.ENERGY);
    return undefined;
};

oAllCards.UnitedNationsMarsInitiative.startingMegaCredits = 40;
oAllCards.UnitedNationsMarsInitiative.play = function () {
    return undefined;
};
oAllCards.UnitedNationsMarsInitiative.canAct = function (player, game) {
    var hasIncreasedTR = player.hasIncreasedTerraformRatingThisGeneration;
    var actionCost = 3;
    return hasIncreasedTR && player.canAfford(actionCost);
};
oAllCards.UnitedNationsMarsInitiative.action = function (player, game) {
    player.megaCredits -= 3;
    player.increaseTerraformRating(game);
    return undefined;
};

oAllCards.AcquiredSpaceAgency.play = function (player, game) {
    game.defer(new DrawCards(player, game, 2, Tags.SPACE));
    player.titanium += 6;
    return undefined;
};

oAllCards.AlliedBanks.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 4);
    player.megaCredits += 3;
    return undefined;
};

oAllCards.AquiferTurbines.canPlay = function (player, _game) {
    return player.canAfford(3);
};
oAllCards.AquiferTurbines.play = function (player, game) {
    player.addProduction(Resources.ENERGY, 2);
    game.defer(new PlaceOceanTile(player, game));
    game.defer(new SelectHowToPayDeferred(player, 3, false, false));
    return undefined;
};

oAllCards.Biofuels.play = function (player) {
    player.addProduction(Resources.ENERGY);
    player.addProduction(Resources.PLANTS);
    player.plants += 2;
    return undefined;
};

oAllCards.Biolab.play = function (player, game) {
    player.addProduction(Resources.PLANTS);
    game.defer(new DrawCards(player, game, 3));
    return undefined;
};

oAllCards.BiosphereSupport.canPlay = function (player) {
    return player.getProduction(Resources.MEGACREDITS) >= -4;
};
oAllCards.BiosphereSupport.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, -1);
    player.addProduction(Resources.PLANTS, 2);
    return undefined;
};

oAllCards.BusinessEmpire.canPlay = function (player, _game) {
    if (player.isCorporation(CardName.MANUTECH))
        return true;
    return player.canAfford(6);
};
oAllCards.BusinessEmpire.play = function (player, game) {
    player.addProduction(Resources.MEGACREDITS, 6);
    game.defer(new SelectHowToPayDeferred(player, 6, false, false));
    return undefined;
};

oAllCards.CheungShingMARS.startingMegaCredits = 44;
oAllCards.CheungShingMARS.getCardDiscount = function (_player, _game, card) {
    return card.tags.filter(function (tag) { return tag === Tags.BUILDING; }).length * 2;
};
oAllCards.CheungShingMARS.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 3);
    return undefined;
};

oAllCards.DomeFarming.play = function (player) {
    player.addProduction(Resources.PLANTS);
    player.addProduction(Resources.MEGACREDITS, 2);
    return undefined;
};

oAllCards.Donation.play = function (player) {
    player.megaCredits += 21;
    return undefined;
};

oAllCards.EarlySettlement.play = function (player, game) {
    player.addProduction(Resources.PLANTS);
    game.defer(new PlaceCityTile(player, game));
    return undefined;
};

oAllCards.EccentricSponsor.getCardDiscount = function (player, _game) {
    if (player.lastCardPlayed !== undefined && player.lastCardPlayed.name === this.name) {
        return 25;
    }
    return 0;
};
oAllCards.EccentricSponsor.play = function (player, game) {
    game.defer(new PlayProjectCard(player, game));
    return undefined;
};

oAllCards.EcologyExperts.getRequirementBonus = function (player) {
    if (player.lastCardPlayed !== undefined && player.lastCardPlayed.name === this.name) {
        return 50;
    }
    return 0;
};
oAllCards.EcologyExperts.play = function (player, game) {
    player.addProduction(Resources.PLANTS);
    game.defer(new PlayProjectCard(player, game));
    return undefined;
};

oAllCards.ExperimentalForest.play = function (player, game) {
    game.defer(new DrawCards(player, game, 2, Tags.PLANT));
    game.defer(new PlaceGreeneryTile(player, game));
    return undefined;
};

oAllCards.GalileanMining.canPlay = function (player, _game) {
    return player.canAfford(5);
};
oAllCards.GalileanMining.play = function (player, game) {
    player.addProduction(Resources.TITANIUM, 2);
    game.defer(new SelectHowToPayDeferred(player, 5, false, false));
    return undefined;
};

oAllCards.GreatAquifer.play = function (player, game) {
    game.defer(new PlaceOceanTile(player, game, 'Select space for first ocean'));
    game.defer(new PlaceOceanTile(player, game, 'Select space for second ocean'));
    return undefined;
};

oAllCards.HousePrinting.play = function (player) {
    player.addProduction(Resources.STEEL);
    return undefined;
};
oAllCards.HousePrinting.getVictoryPoints = function () {
    return 1;
};

oAllCards.HugeAsteroid.canPlay = function (player, _game) {
    return player.canAfford(5);
};
oAllCards.HugeAsteroid.play = function (player, game) {
    game.increaseTemperature(player, 3);
    game.defer(new SelectHowToPayDeferred(player, 5, false, false));
    return undefined;
};

oAllCards.IoResearchOutpost.play = function (player, game) {
    player.addProduction(Resources.TITANIUM);
    game.defer(new DrawCards(player, game, 1));
    return undefined;
};

oAllCards.LavaTubeSettlement.getSpacesForCity = function (player, game) {
    if (game.gameOptions.boardName === BoardName.HELLAS) {
        return game.board.getAvailableSpacesForCity(player);
    }
    return LavaFlows.getVolcanicSpaces(player, game);
};
oAllCards.LavaTubeSettlement.canPlay = function (player, game) {
    return this.getSpacesForCity(player, game).length > 0 && player.getProduction(Resources.ENERGY) >= 1;
};
oAllCards.LavaTubeSettlement.play = function (player, game) {
    player.addProduction(Resources.MEGACREDITS, 2);
    player.addProduction(Resources.ENERGY, -1);
    game.defer(new PlaceCityTile(player, game, 'Select either Tharsis Tholus, Ascraeus Mons, Pavonis Mons or Arsia Mons', this.getSpacesForCity(player, game)));
    return undefined;
};

oAllCards.Loan.canPlay = function (player) {
    return player.getProduction(Resources.MEGACREDITS) >= -3;
};
oAllCards.Loan.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, -2);
    player.megaCredits += 30;
    return undefined;
};

oAllCards.MartianIndustries.play = function (player) {
    player.addProduction(Resources.ENERGY);
    player.addProduction(Resources.STEEL);
    player.megaCredits += 6;
    return undefined;
};

oAllCards.MartianSurvey.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.OXYGEN, 4);
};
oAllCards.MartianSurvey.play = function (player, game) {
    game.defer(new DrawCards(player, game, 2));
    return undefined;
};
oAllCards.MartianSurvey.getVictoryPoints = function () {
    return 1;
};

oAllCards.MetalRichAsteroid.play = function (player, game) {
    player.titanium += 4;
    player.steel += 4;
    return game.increaseTemperature(player, 1);
};

oAllCards.MetalsCompany.play = function (player) {
    player.addProduction(Resources.MEGACREDITS);
    player.addProduction(Resources.TITANIUM);
    player.addProduction(Resources.STEEL);
    return undefined;
};

oAllCards.MiningOperations.play = function (player) {
    player.addProduction(Resources.STEEL, 2);
    player.steel += 4;
    return undefined;
};

oAllCards.MoholeExcavation.play = function (player) {
    player.addProduction(Resources.STEEL);
    player.addProduction(Resources.HEAT, 2);
    player.heat += 2;
    return undefined;
};

oAllCards.Mohole.play = function (player) {
    player.addProduction(Resources.HEAT, 3);
    player.heat += 3;
    return undefined;
};

oAllCards.NitrogenDelivery.play = function (player, game) {
    player.megaCredits += 5;
    player.increaseTerraformRating(game);
    player.addProduction(Resources.PLANTS);
    return undefined;
};

oAllCards.OrbitalConstructionYard.play = function (player) {
    player.addProduction(Resources.TITANIUM);
    player.titanium += 4;
    return undefined;
};

oAllCards.PointLuna.startingMegaCredits = 38;
oAllCards.PointLuna.onCardPlayed = function (player, game, card) {
    var tagCount = card.tags.filter(function (tag) { return tag === Tags.EARTH; }).length;
    if (player.isCorporation(this.name) && card.tags.indexOf(Tags.EARTH) !== -1) {
        for (var i = 0; i < tagCount; i++) {
            player.cardsInHand.push(game.dealer.dealCard());
        }
    }
};
oAllCards.PointLuna.play = function (player, game) {
    player.addProduction(Resources.TITANIUM);
    player.cardsInHand.push(game.dealer.dealCard());
    return undefined;
};

oAllCards.PolarIndustries.play = function (player, game) {
    game.defer(new PlaceOceanTile(player, game));
    player.addProduction(Resources.HEAT, 2);
    return undefined;
};

oAllCards.PowerGeneration.play = function (player) {
    player.addProduction(Resources.ENERGY, 3);
    return undefined;
};

oAllCards.Psychrophiles.resourceType = ResourceType.MICROBE,
oAllCards.Psychrophiles.resourceCount = 0;
oAllCards.Psychrophiles.canPlay = function (player, game) {
    return game.checkMaxRequirements(player, GlobalParameter.TEMPERATURE, -20);
};
oAllCards.Psychrophiles.play = function () {
    return undefined;
};
oAllCards.Psychrophiles.canAct = function () {
    return true;
};
oAllCards.Psychrophiles.action = function (player) {
    player.addResourceTo(this);
    return undefined;
};

oAllCards.ResearchCoordination.play = function () {
    return undefined;
};

oAllCards.ResearchNetwork.play = function (player, game) {
    player.addProduction(Resources.MEGACREDITS);
    game.defer(new DrawCards(player, game, 3));
    return undefined;
};

oAllCards.RobinsonIndustries.startingMegaCredits = 47;
oAllCards.RobinsonIndustries.play = function () {
    return undefined;
};
oAllCards.RobinsonIndustries.canAct = function (player) {
    return player.canAfford(4);
};
oAllCards.RobinsonIndustries.action = function (player, game) {
    var _this = this;
    var minimum = player.getProduction(Resources.MEGACREDITS);
    var lowest = [];
    [Resources.MEGACREDITS, Resources.STEEL, Resources.TITANIUM, Resources.PLANTS, Resources.ENERGY, Resources.HEAT].forEach(function (resource) {
        var option = new SelectOption('Increase ' + resource + ' production 1 step', 'Select', function () {
            _this.increaseAndLogProduction(game, player, resource);
            return undefined;
        });
        if (player.getProduction(resource) < minimum) {
            lowest = [];
            minimum = player.getProduction(resource);
        }
        if (player.getProduction(resource) === minimum)
            lowest.push(option);
    });
    var result = new OrOptions();
    result.options = lowest;
    return result;
};
oAllCards.RobinsonIndustries.increaseAndLogProduction = function (game, player, resource) {
    player.addProduction(resource);
    player.megaCredits -= 4;
    LogHelper.logGainProduction(game, player, resource);
};

oAllCards.SelfSufficientSettlement.play = function (player, game) {
    player.addProduction(Resources.MEGACREDITS, 2);
    game.defer(new PlaceCityTile(player, game));
    return undefined;
};

oAllCards.SFMemorial.play = function (player, game) {
    game.defer(new DrawCards(player, game, 1));
    return undefined;
};
oAllCards.SFMemorial.getVictoryPoints = function () {
    return 1;
};

oAllCards.SmeltingPlant.play = function (player, game) {
    player.steel += 5;
    return game.increaseOxygenLevel(player, 2);
};

oAllCards.SocietySupport.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, -1);
    player.addProduction(Resources.PLANTS);
    player.addProduction(Resources.ENERGY);
    player.addProduction(Resources.HEAT);
    return undefined;
};

oAllCards.SpaceHotels.canPlay = function (player) {
    return player.getTagCount(Tags.EARTH) >= 2;
};
oAllCards.SpaceHotels.play = function (player) {
    player.addProduction(Resources.MEGACREDITS, 4);
    return undefined;
};

oAllCards.Supplier.play = function (player) {
    player.addProduction(Resources.ENERGY, 2);
    player.steel += 4;
    return undefined;
};

oAllCards.SupplyDrop.play = function (player) {
    player.titanium += 3;
    player.steel += 8;
    player.plants += 3;
    return undefined;
};

oAllCards.UNMIContractor.play = function (player, game) {
    player.increaseTerraformRatingSteps(3, game);
    game.defer(new DrawCards(player, game, 1));
    return undefined;
};

oAllCards.ValleyTrust.startingMegaCredits = 37;
oAllCards.ValleyTrust.getCardDiscount = function (_player, _game, card) {
    return card.tags.filter(function (tag) { return tag === Tags.SCIENCE; }).length * 2;
};
oAllCards.ValleyTrust.initialaction = function (player, game) {
    if (game.gameOptions.preludeExtension) {
        var cardsDrawn = [
            game.dealer.dealPreludeCard(),
            game.dealer.dealPreludeCard(),
            game.dealer.dealPreludeCard(),
        ];
        return new SelectCard('Choose prelude card to play', 'Play', cardsDrawn, function (foundCards) {
            if (foundCards[0].canPlay === undefined || foundCards[0].canPlay(player, game)) {
                return player.playCard(game, foundCards[0]);
            }
            else {
                throw new Error('You cannot pay for this card');
            }
        }, 1, 1);
    }
    else {
        console.warn('Prelude extension isn\'t selected.');
        return undefined;
    }
};
oAllCards.ValleyTrust.play = function () {
    return undefined;
};

oAllCards.Vitor.startingMegaCredits = 48;
oAllCards.Vitor.selectAwardToFund = function (player, game, award) {
    return new SelectOption('Fund ' + award.name + ' award', 'Confirm', function () {
        game.fundAward(player, award);
        return undefined;
    });
};
oAllCards.Vitor.initialaction = function (player, game) {
    var _this = this;
    if (game.isSoloMode()) {
        return;
    }
    var freeAward = new OrOptions();
    freeAward.title = 'Select award to fund';
    freeAward.buttonLabel = 'Confirm';
    freeAward.options = game.awards.map(function (award) { return _this.selectAwardToFund(player, game, award); });
    return freeAward;
};
oAllCards.Vitor.onCardPlayed = function (player, game, card) {
    if (player.isCorporation(this.name) && card.getVictoryPoints !== undefined && card.getVictoryPoints(player, game) >= 0) {
        player.megaCredits += 3;
    }
};
oAllCards.Vitor.play = function (_player) {
    return undefined;
};

export {oAllCards};