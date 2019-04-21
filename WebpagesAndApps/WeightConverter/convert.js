document.getElementById('lbsInput').addEventListener('input',
    function(e){
      let lbs = e.target.value;
      document.getElementById('gramsOutput').innerHTML = lbs/0.0022046 + " g";
      document.getElementById('kgOutput').innerHTML = lbs/2.2046 + " kg"
      document.getElementById('ozOutput').innerHTML = lbs * 16 + " oz";
    });