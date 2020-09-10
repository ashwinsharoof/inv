const prompt = require('prompt-sync')();
const purchase_country = ["UK", "Germany" ]
var passport = '';
var passport_country = '';
var inventory_germany = {
    mask: 50,
    gloves: 50
}
var inventory_UK = {
    mask: 50,
    gloves: 50
}
var exit = 'no';
while(true){
    if (`${exit}` == 'yes'){
        break;
    }
var country = prompt('Purchase Country: ');
while(true){
    var match_country = `${purchase_country}`.includes(`${country}`)
    console.log(match_country)
    if (match_country){
        console.log(`${country}`);
        break;
    }
    else{
        console.log("Please provide valid country like (UK, Germany) ")
        country = prompt('Purchase Country: ');
    }

}
var optional_passport = prompt("Do you passport number (yes|no): ")
        if (`${optional_passport}` == 'yes'){
            var passport = prompt('Passport Number: ');
            var pass1 = /^[A-Za-z]+$/;
            var pass2 = /^[a-zA-Z0-9]+$/;
            var pass1_uk = /^[0-9]+$/;

            var passport_match1 = (`${passport}`.charAt(0) == 'A')
            if(passport_match1){
                if(`${passport}`.slice(1,3).match(pass1)){
                    if(`${passport}`.slice(4,13).match(pass2)){
                        var passport_country = 'Germany_passport'
                        console.log(`${passport_country}`);
                    }
                }
                
            }
            else{
                var passport_country = 'null'
            }
            var passport_match1 = (`${passport}`.charAt(0) == 'B')
            if(passport_match1){
                if(`${passport}`.slice(1,4).match(pass1_uk)){
                    if(`${passport}`.slice(5,7).match(pass1)){
                        if(`${passport}`.slice(8,15).match(pass2)){
                            var passport_country = 'UK_passport'
                            console.log(`${passport_country}`);
                        }
                        
                    }
                }
                
            }
            else{
                var passport_country = 'null'
            }

            
            

        }

        console.log("Item type: Gloves")
        var gloves = prompt('Number of units: ');

        if (`${country}` == 'Germany'){   
            
        while(true){
            var germany_gloves = `${inventory_germany.gloves}` >= `${gloves}`;
            console.log(germany_gloves);
            if(germany_gloves){
                break;
            }
            if(`${inventory_germany.gloves}` != 0){
                    console.log(`we have only ${inventory_germany.gloves}` )
                    console.log("Item type: Gloves")
                    var gloves = prompt('Number of units: ');
            }
            if (`${inventory_germany.gloves}` < 0){
                    var UK_gloves = `${inventory_UK.gloves}` + `${inventory_germany.gloves}` >= `${gloves}`;
                    console.log(UK_gloves)
                    if (UK_gloves){
                        break;
            }
                    else{
                        console.log("Gloves not available")
                        break;
                    }
                }
                
                
            
            
        }    
            
            
            
        }
        if (`${country}` == 'UK'){
            while(true){
                var UK_gloves = `${inventory_UK.gloves}` >= `${gloves}`;
                console.log(UK_gloves)
                if(UK_gloves){
                    break;
                }
                    console.log(`${inventory_UK.gloves}`)
                    if(`${inventory_UK.gloves}` != 0){
                        console.log(`we have only  ${inventory_UK.gloves}` )
                        console.log("Item type: gloves")
                        var gloves = prompt('Number of units: ');
                    }
                    if (`${inventory_UK.gloves}` < 0){
                        var Germany_gloves = `${inventory_Germany.gloves}`+ `${inventory_UK.gloves}` >= `${gloves}`;
                        if (Germany_gloves){
                            break;
                        }
                        else{
                            console.log("Gloves not available")
                            break;
                        }
                    }
                    
                    
                
                
            }    
                
                
                
            }
        
        console.log(`${gloves}`);
        console.log("Item type: Mask");
        var  mask = prompt('Number of units: ');
        if (`${country}` == 'Germany'){
            
            while(true){
                var germany_mask= `${inventory_germany.mask}` >= `${mask}`;
                console.log(germany_mask);
                if(germany_mask){
                    break;
                }
                if(`${inventory_germany.mask}` != 0){
                        console.log(`we have only ${inventory_germany.mask}` );
                        console.log("Item type: mask");
                        var mask = prompt('Number of units: ');
                }
                if (`${inventory_germany.mask}` == 0){
                        var UK_mask = `${inventory_UK.mask}` >= `${mask}`;
                        console.log(UK_mask);
                        if (UK_mask){
                            break;
                }
                        else{
                            console.log("Gloves not available");
                            break;
                        }
                    }
                    
                    
                
                
            }    
                
                
                
            }
            if (`${country}` == 'UK'){
                while(true){
                    var UK_mask = `${inventory_UK.mask}` >= `${mask}`;
                    console.log(UK_mask)
                    if(UK_mask){
                        break;
                    }
                        console.log(`${inventory_UK.mask}`)
                        if(`${inventory_UK.mask}` != 0){
                            console.log(`we have only  ${inventory_UK.mask}` )
                            console.log("Item type: mask")
                            var mask = prompt('Number of units: ');
                        }
                        if (`${inventory_UK.mask}` == 0){
                            var Germany_mask = `${inventory_Germany.mask}` >= `${mask}`;
                            if (Germany_mask){
                                break;
                            }
                            else{
                                console.log("mask not available")
                                break;
                            }
                        }
                        
                        
                    
                    
                }    
                    
                    
                    
                }
        console.log(`${mask}`);  
        
        
        if (`${country}` == 'Germany' & (`${optional_passport}` == 'no'  || `${passport_country}` == 'null') ) {
            var total_price  = (`${mask}` * 100 ) + (`${gloves}` * 150 );
            var inventory_germany = {
                mask: `${inventory_germany.mask}` - `${mask}`,
                gloves: `${inventory_germany.gloves}` - `${gloves}`
            }
            

        }
    
    
        if (`${country}` == 'UK' & (`${optional_passport}` == 'no' || `${passport_country}` == 'null')) {
            var total_price  = (`${mask}` * 100 ) ;
            var inventory_UK = {
                mask: `${inventory_UK.mask}` - `${mask}`,
                gloves: `${inventory_UK.gloves}` - `${gloves}`
            }

        }
    
        var transport = (`${mask}` + `${gloves}`)* 40; 
        if (`${country}` == 'Germany' & `${passport_country}` == 'UK_passport'  ) {
           var  transport_discount = (`${transport}` * 20) / 100
            var total_discount  = `${transport}` - `${transport_discount}`
            var total_price  = (`${mask}` * 100 ) + (`${gloves}` * 150 ) + `${total_discount}`;
            var inventory_germany = {
                mask: `${inventory_germany.mask}` - `${mask}`,
                gloves: `${inventory_germany.gloves}` - `${gloves}`
            }
            

        }
        if (`${country}` == 'UK' & `${passport_country}` == 'Germany_passport'  ) {
            var  transport_discount = (`${transport}` * 20) / 100
             var total_discount  = `${transport}` - `${transport_discount}`
             var total_price  = (`${mask}` * 100 ) + (`${gloves}` * 150 ) + `${total_discount}`;
             var inventory_germany = {
                 mask: `${inventory_germany.mask}` - `${mask}`,
                 gloves: `${inventory_germany.gloves}` - `${gloves}`
             }
             
 
         }
        
        console.log(`Total prics : ${total_price}`);
        console.log(`${passport}`);
        console.log(`${inventory_UK.mask}: ${inventory_germany.mask}`);
        console.log(`${inventory_UK.gloves}: ${inventory_germany.gloves}`);

        var exit = prompt("Do you like to exit (yes|no): ");
        }




