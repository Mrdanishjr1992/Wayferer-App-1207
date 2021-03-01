import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class ImgCarousel extends React.Component {
	render() {
		return (
			<div className="carousel">
				<Carousel arrows infinite >
					<img src="https://i.imgur.com/GEK2phv.jpg" alt="" />
					<img src="https://i.imgur.com/DnWDPMU.jpg" alt="" />
					<img src="https://i.imgur.com/Zq59o10.jpg" alt="" />
					<img src="https://i.imgur.com/8sv58bi.jpg" alt="" />
					<img src="https://i.imgur.com/M01TdVO.jpg" alt="" />
					<img src="https://i.imgur.com/NGHnSe2.jpg" alt="" />
					<img src="https://i.imgur.com/hsVACMi.jpg" alt="" />
					<img src="https://i.imgur.com/MZNIy0U.jpg" alt="" />
					<img src="https://i.imgur.com/4Iap3mh.jpg" alt="" />
					<img src="https://i.imgur.com/Pl286I3.jpg" alt="" />
					<img src="https://i.imgur.com/qCvshst.jpg" alt="" />
				</Carousel>
			</div>
		);
	}
}
