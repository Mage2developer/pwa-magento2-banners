import { gql } from '@apollo/client';
import { BannersFragment } from "./bannersFragment.gql";

export const GET_BANNERS = gql`
    query getBanners($is_active: Int!) {
        banners (is_active: $is_active ) {
            is_enabled
            infinite_loop
            show_buttons
            show_dots
            autoplay
            autoplay_speed
            pause_on_hover
            total_count
            items {
                banners_id
                ...BannersFragment
            }
        }
    }
    ${BannersFragment}
`;
