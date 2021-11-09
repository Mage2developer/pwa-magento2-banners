import React from 'react';
import {useQuery} from '@apollo/client';
import {fullPageLoadingIndicator} from "@magento/venia-ui/lib/components/LoadingIndicator";
import ErrorView from "@magento/venia-ui/lib/components/ErrorView";
import {Link} from '@magento/venia-drivers';
import Image from "@magento/venia-ui/lib/components/Image";
import {GET_BANNERS} from "../../queries/banners.gql";
import sliderClasses from "@magento/pagebuilder/lib/ContentTypes/Slider/slider.css";
import SlickSlider from "react-slick";

const Banners = () => {
    const IMAGE_WIDTH = 1900;
    const IMAGE_HEIGHT = 500;

    const {loading, error, data} = useQuery(GET_BANNERS, {
        variables: {is_active: 1},
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    if (!data) {
        if (loading) {
            return fullPageLoadingIndicator;
        }
        if (error) {
            return <ErrorView message={error.message}/>;
        }
    }

    const response = data.banners ? data.banners : null;
    const bannersData = response.total_count > 0 ? data.banners.items : null;

    var sliderSettings = response ? {
        dots: response.show_dots,
        infinite: response.infinite_loop,
        autoplay: response.autoplay,
        autoplaySpeed: response.autoplay_speed ? response.autoplay_speed : 2000,
        pauseOnHover: response.pause_on_hover,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: response.show_buttons,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    } : null;

    const items = bannersData ? bannersData.map((item) => {
        return (
            <div>
                <Link to={item.link}>
                    <Image
                        alt={item.title}
                        resource={item.image}
                        height={IMAGE_HEIGHT}
                        width={IMAGE_WIDTH}
                    />
                </Link>
            </div>
        );
    }) : null;

    const content = response.is_enabled ?
        (<div className={sliderClasses.root}>
            <SlickSlider {...sliderSettings}>
                {items}
            </SlickSlider>
        </div>) : null;

    return (
        <div>{content}</div>
    );
}

export default Banners;
