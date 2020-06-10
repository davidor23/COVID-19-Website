
//array is used to store country codes used in the map rendering.
const isoCodes = [
{iso3: "AFG",iso2: "AF",name: "Afghanistan"},
{iso3: "ALB",iso2: "AL",name: "Albania"},
{iso3: "DZA",iso2: "DZ",name: "Algeria"},
{iso3: "ASM",iso2: "AS",name: "American Samoa"},
{iso3: "AND",iso2: "AD",name: "Andorra"},
{iso3: "AGO",iso2: "AO",name: "Angola"},
{iso3: "AIA",iso2: "AI",name: "Anguilla"},
{iso3: "ATA",iso2: "AQ",name: "Antarctica"},
{iso3: "ATG",iso2: "AG",name: "Antigua and Barbuda"},
{iso3: "ARG",iso2: "AR",name: "Argentina"},
{iso3: "ARM",iso2: "AM",name: "Armenia"},
{iso3: "ABW",iso2: "AW",name: "Aruba"},
{iso3: "AUS",iso2: "AU",name: "Australia"},
{iso3: "AUT",iso2: "AT",name: "Austria"},
{iso3: "AZE",iso2: "AZ",name: "Azerbaijan"},
{iso3: "BHS",iso2: "BS",name: "Bahamas"},
{iso3: "BHR",iso2: "BH",name: "Bahrain"},
{iso3: "BGD",iso2: "BD",name: "Bangladesh"},
{iso3: "BRB",iso2: "BB",name: "Barbados"},
{iso3: "BLR",iso2: "BY",name: "Belarus"},
{iso3: "BEL",iso2: "BE",name: "Belgium"},
{iso3: "BLZ",iso2: "BZ",name: "Belize"},
{iso3: "BEN",iso2: "BJ",name: "Benin"},
{iso3: "BMU",iso2: "BM",name: "Bermuda"},
{iso3: "BTN",iso2: "BT",name: "Bhutan"},
{iso3: "BOL",iso2: "BO",name: "Bolivia, Plurinational State of"},
{iso3: "BOL",iso2: "BO",name: "Bolivia"},
{iso3: "BIH",iso2: "BA",name: "Bosnia and Herzegovina"},
{iso3: "BWA",iso2: "BW",name: "Botswana"},
{iso3: "BVT",iso2: "BV",name: "Bouvet Island"},
{iso3: "BRA",iso2: "BR",name: "Brazil"},
{iso3: "IOT",iso2: "IO",name: "British Indian Ocean Territory"},
{iso3: "BRN",iso2: "BN",name: "Brunei Darussalam"},
{iso3: "BRN",iso2: "BN",name: "Brunei"},
{iso3: "BGR",iso2: "BG",name: "Bulgaria"},
{iso3: "BFA",iso2: "BF",name: "Burkina Faso"},
{iso3: "BDI",iso2: "BI",name: "Burundi"},
{iso3: "KHM",iso2: "KH",name: "Cambodia"},
{iso3: "CMR",iso2: "CM",name: "Cameroon"},
{iso3: "CAN",iso2: "CA",name: "Canada"},
{iso3: "CPV",iso2: "CV",name: "Cape Verde"},
{iso3: "CYM",iso2: "KY",name: "Cayman Islands"},
{iso3: "CAF",iso2: "CF",name: "Central African Republic"},
{iso3: "TCD",iso2: "TD",name: "Chad"},
{iso3: "CHL",iso2: "CL",name: "Chile"},
{iso3: "CHN",iso2: "CN",name: "China"},
{iso3: "CXR",iso2: "CX",name: "Christmas Island"},
{iso3: "CCK",iso2: "CC",name: "Cocos (Keeling) Islands"},
{iso3: "COL",iso2: "CO",name: "Colombia"},
{iso3: "COM",iso2: "KM",name: "Comoros"},
{iso3: "COG",iso2: "CG",name: "Congo"},
{iso3: "COD",iso2: "CD",name: "Congo, the Democratic Republic of the"},
{iso3: "COK",iso2: "CK",name: "Cook Islands"},
{iso3: "CRI",iso2: "CR",name: "Costa Rica"},
{iso3: "CIV",iso2: "CI",name: "Côte d'Ivoire"},
{iso3: "CIV",iso2: "CI",name: "Ivory Coast"},
{iso3: "HRV",iso2: "HR",name: "Croatia"},
{iso3: "CUB",iso2: "CU",name: "Cuba"},
{iso3: "CYP",iso2: "CY",name: "Cyprus"},
{iso3: "CZE",iso2: "CZ",name: "Czech Republic"},
{iso3: "DNK",iso2: "DK",name: "Denmark"},
{iso3: "DJI",iso2: "DJ",name: "Djibouti"},
{iso3: "DMA",iso2: "DM",name: "Dominica"},
{iso3: "DOM",iso2: "DO",name: "Dominican Republic"},
{iso3: "ECU",iso2: "EC",name: "Ecuador"},
{iso3: "EGY",iso2: "EG",name: "Egypt"},
{iso3: "SLV",iso2: "SV",name: "El Salvador"},
{iso3: "GNQ",iso2: "GQ",name: "Equatorial Guinea"},
{iso3: "ERI",iso2: "ER",name: "Eritrea"},
{iso3: "EST",iso2: "EE",name: "Estonia"},
{iso3: "ETH",iso2: "ET",name: "Ethiopia"},
{iso3: "FLK",iso2: "FK",name: "Falkland Islands (Malvinas)"},
{iso3: "FRO",iso2: "FO",name: "Faroe Islands"},
{iso3: "FJI",iso2: "FJ",name: "Fiji"},
{iso3: "FIN",iso2: "FI",name: "Finland"},
{iso3: "FRA",iso2: "FR",name: "France"},
{iso3: "GUF",iso2: "GF",name: "French Guiana"},
{iso3: "PYF",iso2: "PF",name: "French Polynesia"},
{iso3: "ATF",iso2: "TF",name: "French Southern Territories"},
{iso3: "GAB",iso2: "GA",name: "Gabon"},
{iso3: "GMB",iso2: "GM",name: "Gambia"},
{iso3: "GEO",iso2: "GE",name: "Georgia"},
{iso3: "DEU",iso2: "DE",name: "Germany"},
{iso3: "GHA",iso2: "GH",name: "Ghana"},
{iso3: "GIB",iso2: "GI",name: "Gibraltar"},
{iso3: "GRC",iso2: "GR",name: "Greece"},
{iso3: "GRL",iso2: "GL",name: "Greenland"},
{iso3: "GRD",iso2: "GD",name: "Grenada"},
{iso3: "GLP",iso2: "GP",name: "Guadeloupe"},
{iso3: "GUM",iso2: "GU",name: "Guam"},
{iso3: "GTM",iso2: "GT",name: "Guatemala"},
{iso3: "GGY",iso2: "GG",name: "Guernsey"},
{iso3: "GIN",iso2: "GN",name: "Guinea"},
{iso3: "GNB",iso2: "GW",name: "Guinea-Bissau"},
{iso3: "GUY",iso2: "GY",name: "Guyana"},
{iso3: "HTI",iso2: "HT",name: "Haiti"},
{iso3: "HMD",iso2: "HM",name: "Heard Island and McDonald Islands"},
{iso3: "VAT",iso2: "VA",name: "Holy See (Vatican City State)"},
{iso3: "HND",iso2: "HN",name: "Honduras"},
{iso3: "HKG",iso2: "HK",name: "Hong Kong"},
{iso3: "HUN",iso2: "HU",name: "Hungary"},
{iso3: "ISL",iso2: "IS",name: "Iceland"},
{iso3: "IND",iso2: "IN",name: "India"},
{iso3: "IDN",iso2: "ID",name: "Indonesia"},
{iso3: "IRN",iso2: "IR",name: "Iran, Islamic Republic of"},
{iso3: "IRQ",iso2: "IQ",name: "Iraq"},
{iso3: "IRL",iso2: "IE",name: "Ireland"},
{iso3: "IMN",iso2: "IM",name: "Isle of Man"},
{iso3: "ISR",iso2: "IL",name: "Israel"},
{iso3: "ITA",iso2: "IT",name: "Italy"},
{iso3: "JAM",iso2: "JM",name: "Jamaica"},
{iso3: "JPN",iso2: "JP",name: "Japan"},
{iso3: "JEY",iso2: "JE",name: "Jersey"},
{iso3: "JOR",iso2: "JO",name: "Jordan"},
{iso3: "KAZ",iso2: "KZ",name: "Kazakhstan"},
{iso3: "KEN",iso2: "KE",name: "Kenya"},
{iso3: "KIR",iso2: "KI",name: "Kiribati"},
{iso3: "PRK",iso2: "KP",name: "Korea, Democratic People's Republic of"},
{iso3: "KOR",iso2: "KR",name: "Korea, Republic of"},
{iso3: "KOR",iso2: "KR",name: "South Korea"},
{iso3: "KWT",iso2: "KW",name: "Kuwait"},
{iso3: "KGZ",iso2: "KG",name: "Kyrgyzstan"},
{iso3: "LAO",iso2: "LA",name: "Lao People's Democratic Republic"},
{iso3: "LVA",iso2: "LV",name: "Latvia"},
{iso3: "LBN",iso2: "LB",name: "Lebanon"},
{iso3: "LSO",iso2: "LS",name: "Lesotho"},
{iso3: "LBR",iso2: "LR",name: "Liberia"},
{iso3: "LBY",iso2: "LY",name: "Libyan Arab Jamahiriya"},
{iso3: "LBY",iso2: "LY",name: "Libya"},
{iso3: "LIE",iso2: "LI",name: "Liechtenstein"},
{iso3: "LTU",iso2: "LT",name: "Lithuania"},
{iso3: "LUX",iso2: "LU",name: "Luxembourg"},
{iso3: "MAC",iso2: "MO",name: "Macao"},
{iso3: "MKD",iso2: "MK",name: "Macedonia, the former Yugoslav Republic of"},
{iso3: "MDG",iso2: "MG",name: "Madagascar"},
{iso3: "MWI",iso2: "MW",name: "Malawi"},
{iso3: "MYS",iso2: "MY",name: "Malaysia"},
{iso3: "MDV",iso2: "MV",name: "Maldives"},
{iso3: "MLI",iso2: "ML",name: "Mali"},
{iso3: "MLT",iso2: "MT",name: "Malta"},
{iso3: "MHL",iso2: "MH",name: "Marshall Islands"},
{iso3: "MTQ",iso2: "MQ",name: "Martinique"},
{iso3: "MRT",iso2: "MR",name: "Mauritania"},
{iso3: "MUS",iso2: "MU",name: "Mauritius"},
{iso3: "MYT",iso2: "YT",name: "Mayotte"},
{iso3: "MEX",iso2: "MX",name: "Mexico"},
{iso3: "FSM",iso2: "FM",name: "Micronesia, Federated States of"},
{iso3: "MDA",iso2: "MD",name: "Moldova, Republic of"},
{iso3: "MCO",iso2: "MC",name: "Monaco"},
{iso3: "MNG",iso2: "MN",name: "Mongolia"},
{iso3: "MNE",iso2: "ME",name: "Montenegro"},
{iso3: "MSR",iso2: "MS",name: "Montserrat"},
{iso3: "MAR",iso2: "MA",name: "Morocco"},
{iso3: "MOZ",iso2: "MZ",name: "Mozambique"},
{iso3: "MMR",iso2: "MM",name: "Myanmar"},
{iso3: "MMR",iso2: "MM",name: "Burma"},
{iso3: "NAM",iso2: "NA",name: "Namibia"},
{iso3: "NRU",iso2: "NR",name: "Nauru"},
{iso3: "NPL",iso2: "NP",name: "Nepal"},
{iso3: "NLD",iso2: "NL",name: "Netherlands"},
{iso3: "ANT",iso2: "AN",name: "Netherlands Antilles"},
{iso3: "NCL",iso2: "NC",name: "New Caledonia"},
{iso3: "NZL",iso2: "NZ",name: "New Zealand"},
{iso3: "NIC",iso2: "NI",name: "Nicaragua"},
{iso3: "NER",iso2: "NE",name: "Niger"},
{iso3: "NGA",iso2: "NG",name: "Nigeria"},
{iso3: "NIU",iso2: "NU",name: "Niue"},
{iso3: "NFK",iso2: "NF",name: "Norfolk Island"},
{iso3: "MNP",iso2: "MP",name: "Northern Mariana Islands"},
{iso3: "NOR",iso2: "NO",name: "Norway"},
{iso3: "OMN",iso2: "OM",name: "Oman"},
{iso3: "PAK",iso2: "PK",name: "Pakistan"},
{iso3: "PLW",iso2: "PW",name: "Palau"},
{iso3: "PSE",iso2: "PS",name: "Palestinian Territory, Occupied"},
{iso3: "PAN",iso2: "PA",name: "Panama"},
{iso3: "PNG",iso2: "PG",name: "Papua New Guinea"},
{iso3: "PRY",iso2: "PY",name: "Paraguay"},
{iso3: "PER",iso2: "PE",name: "Peru"},
{iso3: "PHL",iso2: "PH",name: "Philippines"},
{iso3: "PCN",iso2: "PN",name: "Pitcairn"},
{iso3: "POL",iso2: "PL",name: "Poland"},
{iso3: "PRT",iso2: "PT",name: "Portugal"},
{iso3: "PRI",iso2: "PR",name: "Puerto Rico"},
{iso3: "QAT",iso2: "QA",name: "Qatar"},
{iso3: "REU",iso2: "RE",name: "Réunion"},
{iso3: "ROU",iso2: "RO",name: "Romania"},
{iso3: "RUS",iso2: "RU",name: "Russian Federation"},
{iso3: "RUS",iso2: "RU",name: "Russia"},
{iso3: "RWA",iso2: "RW",name: "Rwanda"},
{iso3: "SHN",iso2: "SH",name: "Saint Helena, Ascension and Tristan da Cunha"},
{iso3: "KNA",iso2: "KN",name: "Saint Kitts and Nevis"},
{iso3: "LCA",iso2: "LC",name: "Saint Lucia"},
{iso3: "SPM",iso2: "PM",name: "Saint Pierre and Miquelon"},
{iso3: "VCT",iso2: "VC",name: "Saint Vincent and the Grenadines"},
{iso3: "VCT",iso2: "VC",name: "Saint Vincent & the Grenadines"},
{iso3: "VCT",iso2: "VC",name: "St. Vincent and the Grenadines"},
{iso3: "WSM",iso2: "WS",name: "Samoa"},
{iso3: "SMR",iso2: "SM",name: "San Marino"},
{iso3: "STP",iso2: "ST",name: "Sao Tome and Principe"},
{iso3: "SAU",iso2: "SA",name: "Saudi Arabia"},
{iso3: "SEN",iso2: "SN",name: "Senegal"},
{iso3: "SRB",iso2: "RS",name: "Serbia"},
{iso3: "SYC",iso2: "SC",name: "Seychelles"},
{iso3: "SLE",iso2: "SL",name: "Sierra Leone"},
{iso3: "SGP",iso2: "SG",name: "Singapore"},
{iso3: "SVK",iso2: "SK",name: "Slovakia"},
{iso3: "SVN",iso2: "SI",name: "Slovenia"},
{iso3: "SLB",iso2: "SB",name: "Solomon Islands"},
{iso3: "SOM",iso2: "SO",name: "Somalia"},
{iso3: "ZAF",iso2: "ZA",name: "South Africa"},
{iso3: "SGS",iso2: "GS",name: "South Georgia and the South Sandwich Islands"},
{iso3: "SSD",iso2: "SS",name: "South Sudan"},
{iso3: "ESP",iso2: "ES",name: "Spain"},
{iso3: "LKA",iso2: "LK",name: "Sri Lanka"},
{iso3: "SDN",iso2: "SD",name: "Sudan"},
{iso3: "SUR",iso2: "SR",name: "Suriname"},
{iso3: "SJM",iso2: "SJ",name: "Svalbard and Jan Mayen"},
{iso3: "SWZ",iso2: "SZ",name: "Swaziland"},
{iso3: "SWE",iso2: "SE",name: "Sweden"},
{iso3: "CHE",iso2: "CH",name: "Switzerland"},
{iso3: "SYR",iso2: "SY",name: "Syrian Arab Republic"},
{iso3: "TWN",iso2: "TW",name: "Taiwan, Province of China"},
{iso3: "TWN",iso2: "TW",name: "Taiwan"},
{iso3: "TJK",iso2: "TJ",name: "Tajikistan"},
{iso3: "TZA",iso2: "TZ",name: "Tanzania, United Republic of"},
{iso3: "THA",iso2: "TH",name: "Thailand"},
{iso3: "TLS",iso2: "TL",name: "Timor-Leste"},
{iso3: "TGO",iso2: "TG",name: "Togo"},
{iso3: "TKL",iso2: "TK",name: "Tokelau"},
{iso3: "TON",iso2: "TO",name: "Tonga"},
{iso3: "TTO",iso2: "TT",name: "Trinidad and Tobago"},
{iso3: "TTO",iso2: "TT",name: "Trinidad & Tobago"},
{iso3: "TUN",iso2: "TN",name: "Tunisia"},
{iso3: "TUR",iso2: "TR",name: "Turkey"},
{iso3: "TKM",iso2: "TM",name: "Turkmenistan"},
{iso3: "TCA",iso2: "TC",name: "Turks and Caicos Islands"},
{iso3: "TUV",iso2: "TV",name: "Tuvalu"},
{iso3: "UGA",iso2: "UG",name: "Uganda"},
{iso3: "UKR",iso2: "UA",name: "Ukraine"},
{iso3: "ARE",iso2: "AE",name: "United Arab Emirates"},
{iso3: "GBR",iso2: "GB",name: "United Kingdom"},
{iso3: "USA",iso2: "US",name: "United States of America"},
{iso3: "UMI",iso2: "UM",name: "United States Minor Outlying Islands"},
{iso3: "URY",iso2: "UY",name: "Uruguay"},
{iso3: "UZB",iso2: "UZ",name: "Uzbekistan"},
{iso3: "VUT",iso2: "VU",name: "Vanuatu"},
{iso3: "VEN",iso2: "VE",name: "Venezuela, Bolivarian Republic of"},
{iso3: "VEN",iso2: "VE",name: "Venezuela"},
{iso3: "VNM",iso2: "VN",name: "Viet Nam"},
{iso3: "VNM",iso2: "VN",name: "Vietnam"},
{iso3: "VGB",iso2: "VG",name: "Virgin Islands, British"},
{iso3: "VIR",iso2: "VI",name: "Virgin Islands, U.S."},
{iso3: "WLF",iso2: "WF",name: "Wallis and Futuna"},
{iso3: "ESH",iso2: "EH",name: "Western Sahara"},
{iso3: "YEM",iso2: "YE",name: "Yemen"},
{iso3: "ZMB",iso2: "ZM",name: "Zambia"},
{iso3: "ZWE",iso2: "ZW",name: "Zimbabwe"}
]

//loads the totals data on the homepage once the document is loaded.
$(document).ready(
    function()
    {
		//API data details for world summary.
        var apiWorldSummary = {
			"async": true,
			"crossDomain": true,
			"url": "https://api.covid19api.com/summary",
			"method": "GET",
		}
		//AJAX call then push the values from the response to the website fields.
		$.ajax(apiWorldSummary).done(function (response) {
			document.getElementById("casesTotal").innerHTML = "Total Cases Worldwide: " + response.Global.TotalConfirmed;
			document.getElementById("deathsTotal").innerHTML = "Total Deaths Worldwide: " + response.Global.TotalDeaths;
			document.getElementById("recoveredTotal").innerHTML = "Total Recovered Worldwide: " + response.Global.TotalRecovered;
			document.getElementById("casesNew").innerHTML = "New Cases Worldwide: " + response.Global.NewConfirmed;
			document.getElementById("deathsNew").innerHTML = "New Deaths Worldwide: " + response.Global.NewDeaths;
			document.getElementById("recoveredNew").innerHTML = "New Recovered Worldwide: " + response.Global.NewRecovered;
		})
    }
);

//Function that select map theme on load.
am4core.ready(function() {

	//selects map theme.
	am4core.useTheme(am4themes_animated);

	//function to load map.
	am4core.ready(function() {

		//map colour and format variables.
		var numberFormatter = new am4core.NumberFormatter();
		var backgroundColor = am4core.color("red");
		var activeColor = am4core.color("red");
		var countryColor = am4core.color("gray");
		var countryStrokeColor = am4core.color("#000000");
		var buttonStrokeColor = am4core.color("#ffffff");
		var countryHoverColor = am4core.color("#1b1b1b");
		var activeCountryColor = am4core.color("#0f0f0f");

		//creating a formatted date to query information in the api call.
		var lastDate = new Date();
		var day = lastDate.getDay()+1;
		var month = lastDate.getMonth() + 1;
		var year = lastDate.getFullYear();
		var stringDay;
		var stringURL;
		var stringMonth;
		if (day < 10) {
		  stringDay = "0" + day;
		} else {
		  stringDay = day;
		}
		if (month < 10) {
		  stringMonth = "0" + month;
		} else {
		  stringMonth = month;
		}
		//reformatted date
		var currentDate = year + "-" + stringMonth + "-" + stringDay;

		//ApiDataInfo url with headers.
		var apiData = {
			"async": true,
			"crossDomain": true,
			"url": "https://covidapi.info/api/v1/global/timeseries/2020-01-10/" + currentDate,
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "who-covid-19-data.p.rapidapi.com",
				"x-rapidapi-key": "38d6996a9emsh912de85060ef640p1876e5jsn4639a20493f8"
			}
		}

		//Ajax api call to get map data
		$.ajax(apiData).done(function (response) {
			//object to stop api data
			var mapImageSeries = {};
			//setting current date.
			var date = currentDate;
			//adding response result to object.
			mapImageSeries = response.result;

			//function to process data from api and add values to format for map series.
			function getSlideData(date) {
				for (const [key, value] of Object.entries(mapImageSeries)) {
					for (var i = 0; i < value.length; i++) {
						if (value[i].date == date) {
							myMapData.push(value[i]);
							Object.assign(value[i], {id: key});
							Object.assign(value[i], {name2: value.name});
							Object.assign(value[i], {iso3: value.iso3});
						}
					}	
				}
				return myMapData;
			}
		
			//variables to help sort data.
			var dateStart;
			var dateEnd;
			var largestArray = 0;
			//this loop removes any object where the confirmed cases is 0. (Performance)
			for (var [key, value] of Object.entries(mapImageSeries)) {
				for(var i = 0; i < value.length; i++){
					if(value[i].confirmed == 0){
					  value.splice(i, 1);
					}
					if (value.length == 0) {
					delete mapImageSeries[key];
					}
					if (value.length > largestArray) {
						largestArray = value.length;
						dateStart = value[0].date;
						dateEnd = value[value.length - 1].date;
					}	
				}
			};
			
			//Array to store data for map.
			var myMapData = [];
			//Populating map data and converting it.
			for (var [key] of Object.entries(mapImageSeries)) {
				var iso3 = key;
				var iso2;
				var name;
				for (const [key, value] of Object.entries(isoCodes)) {
				if (iso3 == value.iso3) {
					iso2 = value.iso2;
					name = value.name;
					}
				}
				Object.assign(mapImageSeries[key], {name: name});
				Object.assign(mapImageSeries[key], {iso3: iso3});
				var val = mapImageSeries[key];
				mapImageSeries[iso2] = val;
				delete mapImageSeries[key];
			};
			
			//converting data show is only shows the most recent full day available.
			myMapData = getSlideData(dateEnd,myMapData);

			//Container to hold the world map.
			var container = am4core.create("chartdiv", am4core.Container);
			container.width = am4core.percent(100);
			container.height = am4core.percent(100);
			container.tooltip = new am4core.Tooltip();  
			container.tooltip.background.fill = am4core.color("black");
			container.tooltip.background.stroke = activeColor;
			container.tooltip.fontSize = "0.9em";
			container.tooltip.getFillFromObject = false;
			container.tooltip.getStrokeFromObject = false;
			
			//The map variables
			var mapChart = container.createChild(am4maps.MapChart);
			mapChart.height = am4core.percent(100);
			mapChart.seriesContainer.background.events.on("over", resetHover);
			mapChart.seriesContainer.background.fillOpacity = 0;
			mapChart.zoomEasing = am4core.ease.sinOut;
			mapChart.geodata = am4geodata_worldLow;
			mapChart.projection = new am4maps.projections.Miller();
			mapChart.panBehavior = "move";

			// Map polygon series (defines how country areas look and behave)
			var polygonSeries = mapChart.series.push(new am4maps.MapPolygonSeries());
			//passing values into the dataseries from the api data for used later.
			polygonSeries.dataFields.id = "id";
			polygonSeries.dataFields.value = "confirmed";
			polygonSeries.dataFields.name2 = "name2";
			polygonSeries.dataFields.iso3 = "iso3";
			polygonSeries.interpolationDuration = 0;
			polygonSeries.exclude = ["AQ"]; // Antarctica is excluded
			polygonSeries.useGeodata = true;
			polygonSeries.nonScalingStroke = true;
			polygonSeries.strokeWidth = 0.5;
			// this helps to place bubbles in the visual middle of the area
			polygonSeries.calculateVisualCenter = true;
			polygonSeries.data = myMapData;
			polygonSeries.mapPolygons.template.tooltipPosition = "fixed";

			//Adding the country series to the map.
			var polygonTemplate = polygonSeries.mapPolygons.template;
			polygonTemplate.fill = countryColor;
			polygonTemplate.fillOpacity = 1
			polygonTemplate.stroke = countryStrokeColor;
			polygonTemplate.strokeOpacity = 1.15
			polygonTemplate.setStateOnChildren = true;
			polygonTemplate.tooltipPosition = "fixed";
			polygonSeries.heatRules.push({
			"target": polygonTemplate,
			"property": "fill",
			"min": countryColor,
			"max": countryColor,
			"dataField": "value"
			})

			// you can have pacific - centered map if you set this to -154.8
			mapChart.deltaLongitude = -10;

			// polygon states
			var polygonHoverState = polygonTemplate.states.create("hover");
			polygonHoverState.transitionDuration = 1400;
			polygonHoverState.properties.fill = countryHoverColor;

			var polygonActiveState = polygonTemplate.states.create("active")
			polygonActiveState.properties.fill = activeCountryColor;

			// Bubble series
			var bubbleSeries = mapChart.series.push(new am4maps.MapImageSeries());  
			bubbleSeries.data = JSON.parse(JSON.stringify(myMapData));
			bubbleSeries.dataFields.value = "confirmed";
			bubbleSeries.dataFields.id = "id";
			bubbleSeries.dataFields.name2 = "name2";
			bubbleSeries.dataFields.recovered = "recovered";
			bubbleSeries.dataFields.deaths = "deaths";
			bubbleSeries.dataFields.iso3 = "iso3";
			// adjust tooltip
			bubbleSeries.tooltip.animationDuration = 0;
			bubbleSeries.tooltip.showInViewport = false;
			bubbleSeries.tooltip.background.fillOpacity = 1.0;
			bubbleSeries.tooltip.getStrokeFromObject = true;
			bubbleSeries.tooltip.getFillFromObject = false;
			bubbleSeries.tooltip.background.fillOpacity = 1;
			bubbleSeries.tooltip.background.fill = am4core.color("#000000");
			bubbleSeries.tooltip.label.interactionsEnabled = true;
			bubbleSeries.tooltip.keepTargetHover = true;

			//Creating the tooltop with dynamic data from api.
			var imageTemplate = bubbleSeries.mapImages.template;
			// if you want bubbles to become bigger when zoomed, set this to false
			imageTemplate.nonScaling = true;
			imageTemplate.fillOpacity = 1.00;
			//Creating the tooltip HTML.
			imageTemplate.tooltipHTML = "<b>{name2}</b>: "
			imageTemplate.tooltipHTML += "<p style = 'color:#FF8C00'> Confirmed Cases: {confirmed} </p>"
			imageTemplate.tooltipHTML += "<p style = 'color:#7FFFD4'> Recovered: {recovered} </p>"
			imageTemplate.tooltipHTML += "<p style = 'color:#DC143C'> Deaths: {deaths} </p>"
			imageTemplate.tooltipHTML += "<a href='countrydata.html?id={iso3}'>Country Data</a>";
			imageTemplate.showTooltipOn = "hover";
			imageTemplate.applyOnClones = true;

			// this is needed for the tooltip to point to the top of the circle instead of the middle
			imageTemplate.adapter.add("tooltipY", function(tooltipY, target) {
				return -target.children.getIndex(0).radius;
			})
			
			// add the virus image instead of a bubble
			var circle = imageTemplate.createChild(am4core.Image);
			circle.href = "images/covid19.png";
			circle.horizontalCenter = "middle";
			circle.verticalCenter = "middle";
			circle.applyOnClones = true;

			//Adjusting size of image based on infection rates
			bubbleSeries.heatRules.push({
			"target": circle,
			"property": "width",
			"min": 10,
			"max": 700,
			"dataField": "value"
			},
			{
			"target": circle,
			"property": "height",
			"min": 10,
			"max": 700,
			"dataField": "value"
			})

			//Centering images in country.
			imageTemplate.adapter.add("latitude", function(latitude, target) {
			var polygon = polygonSeries.getPolygonById(target.dataItem.id);
			if (polygon) {
			  target.disabled = false;
			  return polygon.visualLatitude;
			}
			else {
			  target.disabled = true;
			}
			return latitude;
			})
			imageTemplate.adapter.add("longitude", function(longitude, target) {
			var polygon = polygonSeries.getPolygonById(target.dataItem.id);
			if (polygon) {
			  target.disabled = false;
			  return polygon.visualLongitude;
			}
			else {
			  target.disabled = true;
			}
			return longitude;
			})

			// when data items validated, hide 0 value bubbles (because min size is set)
			bubbleSeries.events.on("dataitemsvalidated", function() {
				bubbleSeries.dataItems.each((dataItem) => {
					var mapImage = dataItem.mapImage;
					var circle = mapImage.children.getIndex(0);
					if (mapImage.dataItem.value == 0) {
					circle.hide(0);
					}
					else if (circle.isHidden || circle.isHiding) {
					circle.show();
					}
				})
			})

			function resetHover() {
				polygonSeries.mapPolygons.each(function(polygon) {
					polygon.isHover = false;
				})
				bubbleSeries.mapImages.each(function(image) {
					image.isHover = false;
				})
			}

			function removeAntarctica(mapData) {
				for (var i = mapData.length - 1; i >= 0; i--) {
					if (mapData[i].id == "AQ") {
						mapData.splice(i, 1);
					}
				}
			}
			
		}); // end Ajax Map Call
	}); // end am4core.ready()
}); // end am4core.ready()