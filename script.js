function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.getElementById('msg')
    var sexo = document.getElementsByName('sexo')
    var nascimento  = document.getElementById('ano').value
    var idade =  ano - nascimento

    var img = document.createElement('img') 

    img.setAttribute('id','foto')
   
    genero = ' '
     if(nascimento.length == 0 || nascimento < 0 || nascimento > ano){
       alert('Por favor, insira um ano de nascimento válido!')
     }else{
         if(sexo[0].checked){
             genero = 'Mulher'
            if(idade<=3){
                img.setAttribute('src','./imagens/bebe-fem200.png')
            }else if(idade<12){
                img.setAttribute('src','./imagens/meninas200.png')
            }else if(idade<=25){
                img.setAttribute('src','./imagens/mocas200.png')
            }else if(idade<=50){
                img.setAttribute('src','./imagens/mulheres200.png')
            }else{
                img.setAttribute('src','./imagens/senhora200.png')
            }

         }else if(sexo[1].checked){
             genero='Homem'
             if(idade<=3){
                img.setAttribute('src','./imagens/bebe-masc200.png')
            }else if(idade<12){
                img.setAttribute('src','./imagens/meninos200.png')
            }else if(idade<=25){
                img.setAttribute('src','./imagens/mocos200.png')
            }else if(idade<=50){
                img.setAttribute('src','./imagens/homens200.png')
            }else{
                img.setAttribute('src','./imagens/senhor200.png')
            }
        }
        
        msg.style.textAlign='center'
        msg.innerHTML =`${genero} com idade de ${idade} anos.`
        msg.appendChild(img)
    }
}
















