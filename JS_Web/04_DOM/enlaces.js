(function () 
{
    function main () 
    {
        let aRedes = document.querySelectorAll('a')
        let eOut = document.querySelector('#out')

        aRedes.forEach(item => {
            item.addEventListener('click', liClick)
        })
        
        
        function liClick(ev)
        {
            console.log(ev.target.id)

            // MEJOR CON IF ELSE PORQUE NO SE PORQUE PETA
            switch(ev.target.id)
            {
                case 'linkedin':
                //aRedes[0].textContent = 'No tengo ' + aRedes[0].getAttribute('id')
                aRedes[0].textContent = 'No tengo ' + aRedes[0].textContent
                /* eOut.innerHTML = ''
                eOut.innerHTML =  */

                case 'twitter':
                aRedes[1].textContent = 'No tengo ' + aRedes[1].textContent
                /* eOut.innerHTML = ''
                eOut.innerHTML = `No tengo ${aRedes[1].getAttribute('id')}` */

                case 'facebook':
                aRedes[2].textContent = 'No tengo ' + aRedes[2].textContent
                /* eOut.innerHTML = ''
                eOut.innerHTML = `No tengo ${aRedes[2].getAttribute('id')}` */

               /*  case 'instagram':
                eOut.innerHTML = `No tengo ${aRedes[3].getAttribute('id')}` */
            }
            
        }
    }


    window.addEventListener('load', main)
})()

 
       