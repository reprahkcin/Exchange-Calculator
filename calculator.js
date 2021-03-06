var numStarch
var numSweets
var numVeryLean
var numLean 
var numMediumFat
var numHighFat
var numPlantBased
var numVegetable
var numFruit
var numSkim
var numLowFat
var numWhole
var numFat
var numAlcohol

var totalCarbs
var totalProtein
var totalFat

var carbCalorieMultiplier = 4
var proteinCalorieMultiplier = 4
var fatCalorieMultiplier = 9
var totalCalories 

var carbPercent
var proteinPercent
var fatPercent


//Reference Values---------------------------------------

var cStarch = 15
var pStarch = 3
var fStarch = 0

var cSweets = 15
var pSweets = 0   
var fSweets = 0

var cVeryLean = 0
var pVeryLean = 7
var fVeryLean = 1

var cLean = 0
var pLean = 7
var fLean = 3

var cMediumFat = 0
var pMediumFat = 7
var fMediumFat = 5

var cHighFat = 0
var pHighFat = 7
var fHighFat = 8

var cPlantBased = 0
var pPlantBased = 7
var fPlantBased = 0

var cVegetable = 5
var pVegetable = 2
var fVegetable = 0

var cFruit = 15
var pFruit = 0
var fFruit = 0

var cSkim = 12
var pSkim = 8
var fSkim = 1

var cLowFat = 12
var pLowFat = 8
var fLowFat = 5

var cWhole = 12
var pWhole = 8
var fWhole = 8

var cFat = 0
var pFat = 0
var fFat = 5

var cAlcohol = 0
var pAlcohol = 0
var fAlcohol = 0

//--------------------------------------------------------------

var cStarchElement = document.getElementById('carb-starch')
    cStarchElement.innerHTML = cStarch 
var pStarchElement = document.getElementById('protein-starch')
    pStarchElement.innerHTML = pStarch
var fStarchElement = document.getElementById('fat-starch')
    fStarchElement.innerHTML = fStarch

var cSweetsElement = document.getElementById('carb-sweets')
    cSweetsElement.innerHTML = cSweets
var pSweetsElement = document.getElementById('protein-sweets-input')
    pSweetsElement.value = pSweets
var fSweetsElement = document.getElementById('fat-sweets-input')
    fSweetsElement.value = fSweets

var cVeryLeanElement = document.getElementById('carb-very-lean')
    cVeryLeanElement.innerHTML = cVeryLean 
var pVeryLeanElement = document.getElementById('protein-very-lean')
    pVeryLeanElement.innerHTML = pVeryLean
var fVeryLeanElement = document.getElementById('fat-very-lean')
    fVeryLeanElement.innerHTML = fVeryLean

var cLeanElement = document.getElementById('carb-lean')
    cLeanElement.innerHTML = cLean 
var pLeanElement = document.getElementById('protein-lean')
    pLeanElement.innerHTML = pLean
var fLeanElement = document.getElementById('fat-lean')
    fLeanElement.innerHTML = fLean

var cMediumFatElement = document.getElementById('carb-medium-fat')
    cMediumFatElement.innerHTML = cMediumFat 
var pMediumFatElement = document.getElementById('protein-medium-fat')
    pMediumFatElement.innerHTML = pMediumFat
var fMediumFatElement = document.getElementById('fat-medium-fat')
    fMediumFatElement.innerHTML = fMediumFat

var cHighFatElement = document.getElementById('carb-high-fat')
    cHighFatElement.innerHTML = cHighFat 
var pHighFatElement = document.getElementById('protein-high-fat')
    pHighFatElement.innerHTML = pHighFat
var fHighFatElement = document.getElementById('fat-high-fat')
    fHighFatElement.innerHTML = fHighFat

var cPlantBasedElement = document.getElementById('carb-plant-based-input')
    cPlantBasedElement.value = cPlantBased 
var pPlantBasedElement = document.getElementById('protein-plant-based')
    pPlantBasedElement.innerHTML = pPlantBased
var fPlantBasedElement = document.getElementById('fat-plant-based-input')
    fPlantBasedElement.value = fPlantBased

var cVegetableElement = document.getElementById('carb-vegetable')
    cVegetableElement.innerHTML = cVegetable 
var pVegetableElement = document.getElementById('protein-vegetable')
    pVegetableElement.innerHTML = pVegetable
var fVegetableElement = document.getElementById('fat-vegetable')
    fVegetableElement.innerHTML = fVegetable

var cFruitElement = document.getElementById('carb-fruit')
    cFruitElement.innerHTML = cFruit 
var pFruitElement = document.getElementById('protein-fruit')
    pFruitElement.innerHTML = pFruit
var fFruitElement = document.getElementById('fat-fruit')
    fFruitElement.innerHTML = fFruit

var cSkimElement = document.getElementById('carb-skim')
    cSkimElement.innerHTML = cSkim 
var pSkimElement = document.getElementById('protein-skim')
    pSkimElement.innerHTML = pSkim
var fSkimElement = document.getElementById('fat-skim')
    fSkimElement.innerHTML = fSkim

var cLowFatElement = document.getElementById('carb-low-fat')
    cLowFatElement.innerHTML = cLowFat 
var pLowFatElement = document.getElementById('protein-low-fat')
    pLowFatElement.innerHTML = pLowFat
var fLowFatElement = document.getElementById('fat-low-fat')
    fLowFatElement.innerHTML = fLowFat

var cWholeElement = document.getElementById('carb-whole')
    cWholeElement.innerHTML = cWhole 
var pWholeElement = document.getElementById('protein-whole')
    pWholeElement.innerHTML = pWhole
var fWholeElement = document.getElementById('fat-whole')
    fWholeElement.innerHTML = fWhole

var cFatElement = document.getElementById('carb-fat')
    cFatElement.innerHTML = cFat 
var pFatElement = document.getElementById('protein-fat')
    pFatElement.innerHTML = pFat
var fFatElement = document.getElementById('fat-fat')
    fFatElement.innerHTML = fFat

var cAlcoholElement = document.getElementById('carb-alcohol-input')
    cAlcoholElement.value = cAlcohol 
var pAlcoholElement = document.getElementById('protein-alcohol')
    pAlcoholElement.innerHTML = pAlcohol
var fAlcoholElement = document.getElementById('fat-alcohol-input')
    fAlcoholElement.value = fAlcohol

//------------------------------------------------------------

function GetValues(){

    numStarch = document.getElementById('starch-bread').value
    var StarchCarbs = numStarch * cStarch
    document.getElementById('calculation-carb-starch').innerHTML = StarchCarbs
    var StarchProtein = numStarch * pStarch
    document.getElementById('calculation-protein-starch').innerHTML = StarchProtein
    var StarchFat = numStarch * fStarch
    document.getElementById('calculation-fat-starch').innerHTML = StarchFat

    numSweets = document.getElementById('sweets').value
    var SweetsCarbs = numSweets * cSweets
    document.getElementById('calculation-carb-sweets').innerHTML = SweetsCarbs
    var SweetsProtein = numSweets * pSweetsElement.value
    document.getElementById('calculation-protein-sweets').innerHTML = SweetsProtein
    var SweetsFat = numSweets * fSweetsElement.value
    document.getElementById('calculation-fat-sweets').innerHTML = SweetsFat


    numVeryLean = document.getElementById('very-lean').value
    var VeryLeanCarbs = numVeryLean * cVeryLean
    document.getElementById('calculation-carb-very-lean').innerHTML = VeryLeanCarbs
    var VeryLeanProtein = numVeryLean * pVeryLean
    document.getElementById('calculation-protein-very-lean').innerHTML = VeryLeanProtein
    var VeryLeanFat = numVeryLean * fVeryLean
    document.getElementById('calculation-fat-very-lean').innerHTML = VeryLeanFat

    numLean = document.getElementById('lean').value
    var LeanCarbs = numLean * cLean
    document.getElementById('calculation-carb-lean').innerHTML = LeanCarbs
    var LeanProtein = numLean * pLean
    document.getElementById('calculation-protein-lean').innerHTML = LeanProtein
    var LeanFat = numLean * fLean
    document.getElementById('calculation-fat-lean').innerHTML = LeanFat

    numMediumFat = document.getElementById('medium-fat').value
    var MediumFatCarbs = numMediumFat * cMediumFat
    document.getElementById('calculation-carb-medium-fat').innerHTML = MediumFatCarbs
    var MediumFatProtein = numMediumFat * pMediumFat
    document.getElementById('calculation-protein-medium-fat').innerHTML = MediumFatProtein
    var MediumFatFat = numMediumFat * fMediumFat
    document.getElementById('calculation-fat-medium-fat').innerHTML = MediumFatFat

    numHighFat = document.getElementById('high-fat').value
    var HighFatCarbs = numHighFat * cHighFat
    document.getElementById('calculation-carb-high-fat').innerHTML = HighFatCarbs
    var HighFatProtein = numHighFat * pHighFat
    document.getElementById('calculation-protein-high-fat').innerHTML = HighFatProtein
    var HighFatFat = numHighFat * fHighFat
    document.getElementById('calculation-fat-high-fat').innerHTML = HighFatFat

    numPlantBased = document.getElementById('plant-based').value
    var PlantBasedCarbs = numPlantBased * cPlantBasedElement.value
    document.getElementById('calculation-carb-plant-based').innerHTML = PlantBasedCarbs
    var PlantBasedProtein = numPlantBased * pPlantBased
    document.getElementById('calculation-protein-plant-based').innerHTML = PlantBasedProtein
    var PlantBasedFat = numPlantBased * fPlantBasedElement.value
    document.getElementById('calculation-fat-plant-based').innerHTML = PlantBasedFat

    numVegetable = document.getElementById('vegetable').value
    var VegetableCarbs = numVegetable * cVegetable
    document.getElementById('calculation-carb-vegetable').innerHTML = VegetableCarbs
    var VegetableProtein = numVegetable * pVegetable
    document.getElementById('calculation-protein-vegetable').innerHTML = VegetableProtein
    var VegetableFat = numVegetable * fVegetable
    document.getElementById('calculation-fat-vegetable').innerHTML = VegetableFat

    numFruit = document.getElementById('fruit').value
    var FruitCarbs = numFruit * cFruit
    document.getElementById('calculation-carb-fruit').innerHTML = FruitCarbs
    var FruitProtein = numFruit * pFruit
    document.getElementById('calculation-protein-fruit').innerHTML = FruitProtein
    var FruitFat = numFruit * fFruit
    document.getElementById('calculation-fat-fruit').innerHTML = FruitFat

    numSkim = document.getElementById('skim').value
    var SkimCarbs = numSkim * cSkim
    document.getElementById('calculation-carb-skim').innerHTML = SkimCarbs
    var SkimProtein = numSkim * pSkim
    document.getElementById('calculation-protein-skim').innerHTML = SkimProtein
    var SkimFat = numSkim * fSkim
    document.getElementById('calculation-fat-skim').innerHTML = SkimFat

    numLowFat = document.getElementById('low-fat').value
    var LowFatCarbs = numLowFat * cLowFat
    document.getElementById('calculation-carb-low-fat').innerHTML = LowFatCarbs
    var LowFatProtein = numLowFat * pLowFat
    document.getElementById('calculation-protein-low-fat').innerHTML = LowFatProtein
    var LowFatFat = numLowFat * fLowFat
    document.getElementById('calculation-fat-low-fat').innerHTML = LowFatFat

    numWhole = document.getElementById('whole').value
    var WholeCarbs = numWhole * cWhole
    document.getElementById('calculation-carb-whole').innerHTML = WholeCarbs
    var WholeProtein = numWhole * pWhole
    document.getElementById('calculation-protein-whole').innerHTML = WholeProtein
    var WholeFat = numWhole * fWhole
    document.getElementById('calculation-fat-whole').innerHTML = WholeFat

    numFat = document.getElementById('fat').value
    var FatCarbs = numFat * cFat
    document.getElementById('calculation-carb-fat').innerHTML = FatCarbs
    var FatProtein = numFat * pFat
    document.getElementById('calculation-protein-fat').innerHTML = FatProtein
    var FatFat = numFat * fFat
    document.getElementById('calculation-fat-fat').innerHTML = FatFat

    numAlcohol = document.getElementById('alcohol').value
    var AlcoholCarbs = numAlcohol * cAlcoholElement.value
    document.getElementById('calculation-carb-alcohol').innerHTML = AlcoholCarbs
    var AlcoholProtein = numAlcohol * pAlcohol
    document.getElementById('calculation-protein-alcohol').innerHTML = AlcoholProtein
    var AlcoholFat = numAlcohol * fAlcoholElement.value
    document.getElementById('calculation-fat-alcohol').innerHTML = AlcoholFat

    totalCarbs = StarchCarbs + SweetsCarbs + VeryLeanCarbs + LeanCarbs + MediumFatCarbs + HighFatCarbs + PlantBasedCarbs + VegetableCarbs + FruitCarbs + SkimCarbs + LowFatCarbs + WholeCarbs + FatCarbs + AlcoholCarbs
    totalProtein = StarchProtein + SweetsProtein + VeryLeanProtein + LeanProtein + MediumFatProtein + HighFatProtein + PlantBasedProtein + VegetableProtein + FruitProtein + SkimProtein + LowFatProtein + WholeProtein + FatProtein + AlcoholProtein
    totalFat = StarchFat + SweetsFat + VeryLeanFat + LeanFat + MediumFatFat + HighFatFat + PlantBasedFat + VegetableFat + FruitFat + SkimFat + LowFatFat + WholeFat + FatFat + AlcoholFat

    
    var totalKcal = (totalCarbs * carbCalorieMultiplier)+(totalProtein * proteinCalorieMultiplier)+(totalFat * fatCalorieMultiplier)
    
    carbPercent = ((totalCarbs * carbCalorieMultiplier) / totalKcal) * 100
    proteinPercent = ((totalProtein * proteinCalorieMultiplier) / totalKcal) * 100
    fatPercent = ((totalFat * fatCalorieMultiplier) / totalKcal) * 100

    document.getElementById('total-carbs').innerHTML = totalCarbs
    document.getElementById('total-protein').innerHTML = totalProtein
    document.getElementById('total-fat').innerHTML = totalFat

    

    document.getElementById('carb-kcal').innerHTML = (totalCarbs * carbCalorieMultiplier) + " kcal / " + carbPercent.toFixed(1) + "% of total"
    document.getElementById('protein-kcal').innerHTML = (totalProtein * proteinCalorieMultiplier) + " kcal / " + proteinPercent.toFixed(1) + "% of total"
    document.getElementById('fat-kcal').innerHTML = (totalFat * fatCalorieMultiplier)  + " kcal / " + fatPercent.toFixed(1) + "% of total"
    document.getElementById('total-kcal').innerHTML = totalKcal + " kcal"

}