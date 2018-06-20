$(function(){
    function commaSeparateNumber(val){

        val = val.toString().replace(/,/g, ''); //remove existing commas first
        var valSplit = val.split('.'); //then separate decimals
            
        while (/(\d+)(\d{3})/.test(valSplit[0].toString())){
            valSplit[0] = valSplit[0].toString().replace(/(\d+)(\d{3})/, '$1'+'.'+'$2');
        }
        
        if(valSplit.length == 2){ //if there were decimals
            val = valSplit[0] + "," + valSplit[1]; //add decimals back
        }else{
            val = valSplit[0]; }
        
        return val;
        }
    $(".gross-calc-btn").on('click', function () {
        var costfm = $('.cost-of-m').val();
        var sellprice = $('.sell-price').val();
        var grosspm = ((sellprice - costfm)/sellprice)*100;
        var profitpp = (sellprice - costfm);
    
    $('.gross-p-m').html(grosspm.toFixed(1) + '%');
    $('.gross-p-p').html('R$ ' + commaSeparateNumber((profitpp.toFixed(2))));
    
    $('.for-1').html('R$ ' + commaSeparateNumber((profitpp*1).toFixed(2)));
    $('.for-5').html('R$ ' + commaSeparateNumber((profitpp*5).toFixed(2)));
    $('.for-10').html('R$ ' + commaSeparateNumber((profitpp*10).toFixed(2)));
    $('.for-25').html('R$ ' + commaSeparateNumber((profitpp*25).toFixed(2)));
    $('.for-50').html('R$ ' + commaSeparateNumber((profitpp*50).toFixed(2)));
    $('.for-75').html('R$ ' + commaSeparateNumber((profitpp*75).toFixed(2)));
    $('.for-100').html('R$ ' + commaSeparateNumber((profitpp*100).toFixed(2)));
    $('.for-200').html('R$ ' + commaSeparateNumber((profitpp*200).toFixed(2)));
    $('.for-500').html('R$ ' + commaSeparateNumber((profitpp*500).toFixed(2)));
    $('.for-1000').html('R$ ' + commaSeparateNumber((profitpp*1000).toFixed(2)));
    $('.for-2000').html('R$ ' + commaSeparateNumber((profitpp*2000).toFixed(2)));
    $('.for-3000').html('R$ ' + commaSeparateNumber((profitpp*3000).toFixed(2)));
    $('.for-4000').html('R$ ' + commaSeparateNumber((profitpp*4000).toFixed(2)));
    $('.for-5000').html('R$ ' + commaSeparateNumber((profitpp*5000).toFixed(2)));
    $('.for-10000').html('R$ ' + commaSeparateNumber((profitpp*10000).toFixed(2)));
    
    });
})