export const getReviewWordWithEnding = (reviewCount: number) => {
	if (reviewCount % 10 === 1 && reviewCount % 100 !== 11) {
		return `${reviewCount} отзыв`;
	} else if (
		(reviewCount % 10 >= 2 && reviewCount % 10 <= 4) &&
		(reviewCount % 100 < 12 || reviewCount % 100 > 14)
	) {
		return `${reviewCount} отзыва`;
	} else {
		return `${reviewCount} отзывов`;
	}
}