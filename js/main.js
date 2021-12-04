$(function(){

    const data = {
        fiveStar: 2928,
        fourStar: 229,
        threeStar: 50,
        twoStar:5,
        oneStar: 7
    }

    populateRatingCounts();


    const populateRatingCounts = () => {
        $("#5-star-count").text(data.fiveStar);
        $("#4-star-count").text(data.fourStar)
        $("#3-star-count").text(data.threeStar)
        $("#2-star-count").text(data.twoStar)
        $("#1-star-count").text(data.oneStar)
    }


  
});