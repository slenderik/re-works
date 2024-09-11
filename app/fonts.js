import localFont from 'next/font/local';

export const vk_sans_display = localFont({
	src: [
	  {
			path: './fonts/VKSansDisplayRegular.woff2',
			weight: '400',
			style: 'normal',
	  },
	  {
			path: './fonts/VKSansDisplayMedium.woff2',
			weight: '500',
			style: 'normal',
	  },
	  {
			path: './fonts/VKSansDisplayMediumItalic.woff2',
			weight: '500',
			style: 'italic',
	  },
	  {
			path: './fonts/VKSansDisplayDemiBold.woff2',
			weight: '600',
			style: 'normal',
	  },
	  {
			path: './fonts/VKSansDisplayDemiBoldItalic.woff2',
			weight: '600',
			style: 'italic',
	  },
	  {
			path: './fonts/VKSansDisplayBold.woff2',
			weight: '700',
			style: 'normal',
	  },
	  {
			path: './fonts/VKSansDisplayBoldItalic.woff2',
			weight: '700',
			style: 'italic',
	  },
	],
})