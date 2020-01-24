import $ from 'jquery'
import 'bootstrap'
import Rellax from 'rellax'
import VirtualScroll from 'virtual-scroll'

const drone = new Rellax('#drone', {
	speed: 4,
	center: false,
	wrapper: null,
	round: true,
	vertical: true,
	horizontal: false
})

const tagline = new Rellax('#tagline', {
	speed: 1.5,
	center: false,
	wrapper: null,
	round: true,
	vertical: true,
	horizontal: false
})

const cloud = new Rellax('#cloud', {
	speed: 1,
	center: false,
	wrapper: null,
	round: true,
	vertical: true,
	horizontal: false
})

new VirtualScroll()
