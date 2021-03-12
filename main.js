const panoImage = document.querySelector('.pano-image');
const toiletPano = '/home/user/Desktop/3d-card-effect-master/pan_view.jpg';
const panorama = new PANOLENS.ImagePanoram(toiletPano);
const viewer = new PANOLENS.Viewer({
    container : panoImage
});

viewer.add(panorama);
