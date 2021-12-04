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

    const calcPercentage = (rating) => {
        return Math.round(rating / data.totalReviews * 100)
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
        $(".reviews__ratings--bar-5-star").css("width", calcPercentage(data.fiveStar) + "%" );
        $(".reviews__ratings--bar-4-star").css("width", calcPercentage(data.fourStar) + "%" );
        $(".reviews__ratings--bar-3-star").css("width", calcPercentage(data.threeStar) + "%" );
        $(".reviews__ratings--bar-2-star").css("width", calcPercentage(data.twoStar) + "%" );
        $(".reviews__ratings--bar-1-star").css("width", calcPercentage(data.oneStar) + "%" );
    }

    populateRatingCounts();
    calculateRatingBars()
    
    $(".reviews__actions--writereview").click(()=> {
        $(".popup").css("visibility","visible");
        $(".popup").css("opacity",.8);
    })

    $(".popup__close").click(()=> {
        $(".popup").css("visibility","hidden");
        $(".popup").css("opacity",0);
    })



  
});