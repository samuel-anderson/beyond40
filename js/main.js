$(function(){

    const data = {
        totalReviews: 3219,
        fiveStar: 2928,
        fourStar: 229,
        threeStar: 50,
        twoStar:5,
        oneStar: 7
    }

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    const populateRatingCounts = () => {
        $("#totalReviews").text(formatNumber(data.totalReviews));
        $("#5-star-count").text(data.fiveStar);
        $("#4-star-count").text(data.fourStar)
        $("#3-star-count").text(data.threeStar)
        $("#2-star-count").text(data.twoStar)
        $("#1-star-count").text(data.oneStar)
    }

    const calculateRatingBars = () => {


        const total = data.totalReviews;

        const fiveStar =  Math.round(data.fiveStar / total * 10)
        const fourStar =  Math.round(data.fourStar / total * 10)
        const threeStar =  Math.round(data.threeStar / total * 10)
        const twoStar =  Math.round(data.twoStar / total * 10)
        const oneStar =  Math.round(data.oneStar / total * 10)

        $(".reviews__ratings--bar-5-star").css("width", fiveStar + "%" );



    }

    populateRatingCounts();

    calculateRatingBars()
    


  
});