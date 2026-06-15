const heartCount = 30;

for(let i=0;i<heartCount;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top=Math.random()*100+"vh";

heart.style.opacity=".25";
heart.style.pointerEvents="none";
heart.style.zIndex="-1";

heart.style.animation=
`float ${5+Math.random()*10}s linear infinite`;

heart.style.fontSize=
`${15+Math.random()*25}px`;

document.body.appendChild(heart);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes float{
0%{
transform:translateY(100vh);
}
100%{
transform:translateY(-120vh);
}
}
`;

document.head.appendChild(style);
