/* tslint:disable:max-line-length */

import { ShareArgs } from '../helpers/share-buttons.class';
import { ShareLinks } from './share-links.functions';


describe('Module: ShareLinks, Angular Tests', () => {


    describe('share()', () => {
        const args = new ShareArgs('http://www.mysite.com', 'my title', 'my description', 'https://my/image.png', 'tag1,tag2');

        it('should return an share url for FACEBOOK provider', () => {

            let shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=http://www.mysite.com&title=my title&description=my description&picture=https://my/image.png';
            expect(ShareLinks.fbShare(args)).toEqual(shareUrl);
        });

        it('should return an share url for TWITTER provider', () => {

            let shareUrl = 'https://twitter.com/intent/tweet?url=http://www.mysite.com&text=my description&hashtags=tag1,tag2';
            expect(ShareLinks.twitterShare(args)).toEqual(shareUrl);
        });

        it('should return an share url for REDDIT provider', () => {

            let shareUrl = 'http://www.reddit.com/submit?url=http://www.mysite.com&title=my title';
            expect(ShareLinks.redditShare(args)).toEqual(shareUrl);
        });

        it('should return an share url for STUMBLEUPON provider', () => {

            let shareUrl = 'http://www.stumbleupon.com/submit?url=http://www.mysite.com';
            expect(ShareLinks.stumbleShare(args)).toEqual(shareUrl);
        });

        it('should return an share url for LINKEDIN provider', () => {

            let shareUrl = 'http://www.linkedin.com/shareArticle?url=http://www.mysite.com&title=my title&summary=my description';
            expect(ShareLinks.linkedInShare(args)).toEqual(shareUrl);
        });


        it('should return an share url for GOOGLEPLUS provider', () => {

            let shareUrl = 'https://plus.google.com/share?url=http://www.mysite.com';
            expect(ShareLinks.gPlusShare(args)).toEqual(shareUrl);
        });

        it('should return an share url for TUMBLR provider', () => {

            let shareUrl = 'http://tumblr.com/widgets/share/tool?canonicalUrl=http://www.mysite.com&caption=my description&tags=tag1,tag2';
            expect(ShareLinks.tumblrShare(args)).toEqual(shareUrl);
        });


        it('should return an share url for PINTEREST provider', () => {

            let shareUrl = 'https://in.pinterest.com/pin/create/button/?url=http://www.mysite.com&description=my description&media=https://my/image.png';
            expect(ShareLinks.pinShare(args)).toEqual(shareUrl);
        });

        it('should try to deduct "image" and "description" from meta and return share url for PINTEREST provider', () => {

            let pinArgs = new ShareArgs('http://www.mysite.com', 'my title');
            let shareUrl = 'https://in.pinterest.com/pin/create/button/?url=http://www.mysite.com';
            expect(ShareLinks.pinShare(pinArgs)).toEqual(shareUrl);
        });

    });

});
