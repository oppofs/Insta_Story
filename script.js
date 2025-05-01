// for each ka loop sirf array pe lagta hai
var arr = [
	{dp:"https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
	{dp:"https://images.unsplash.com/photo-1745870297558-367a83462926?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1745853707137-bde430b762aa?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
	{dp:"https://images.unsplash.com/photo-1743299472561-ae1f1b25f5b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1743299472561-ae1f1b25f5b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
	{dp:"https://images.unsplash.com/photo-1728035156904-5485e05001ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1727675467684-b65a39fdeaaa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

var clutter = "";
var badge = document.querySelector(".badge");

arr.forEach(function(elem, idx){
	// console.log(elem, idx);
	clutter += `<div class="badge-image"><img id="${idx}" src="${elem.dp}"></div>`;
});

badge.innerHTML = clutter;

badge.addEventListener("click", function(dets){
	document.querySelector(".full-screen").style.display = "block";

	document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

	setTimeout(function(){
		document.querySelector(".full-screen").style.display = "none";
	}, 3000);
});
