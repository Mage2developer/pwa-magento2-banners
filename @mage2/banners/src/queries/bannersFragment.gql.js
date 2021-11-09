import { gql } from '@apollo/client';

export const BannersFragment = gql`
    fragment BannersFragment on Banner {
        banners_id
        title
        image
        link
        sort_order
        is_active
        created_at
    }
`;
