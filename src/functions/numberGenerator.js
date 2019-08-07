// tao list nhung o co the di duoc dua vao o hien tai cua nguoi choi
function numberGenerator(X){
	if (1 <= X <= 64){
		if (X===0){
			return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]
		}
		if (X===1){
			return [11, 18]
		}
		else if (X===2){
			return [12, 19, 17]
		}
		else if (X===7){
			return [13, 22, 24]
		}
		else if (X===8){
			return [14, 23]
		}
		else if (X===9){
			return [3, 19, 26]
		}
		else if (X===16){
			return [6, 22, 31]
		}
		else if (X===49){
			return [34, 43, 59]
		}
		else if (X===57){
			return [42, 51]
		}
		else if (X===58){
			return [41, 43, 52]
		}
		else if (X===63){
			return [53, 46, 48]
		}
		else if (X===64){
			return [54, 47]
		}
		else if (X===56){
			return [62, 46, 39]
		}
		else if (X===10){
			return [25, 27, 20, 4]
		}
		else if (X===15){
			return [5, 21, 30, 32]
		}
		else if (X===50){
			return [33, 35, 44, 60]
		}
		else if (X===55){
			return [61, 45, 38, 40]
		}
		else if ([3,4,5,6].includes(X)){
			return [X+6, X+10, X+15, X+17]
		}
		else if ([11,12,13,14].includes(X)){
			return [X+6, X+10, X+15, X+17, X-10, X-6]
		}
		else if ([17,25,33,41].includes(X)){
			return [X-15, X-6, X+10, X+17]
		}
		else if ([18,26,34,42].includes(X)){
			return [X-15, X-6, X+10, X+17, X-17, X+15]
		}
		else if ([59,60,61,62].includes(X)){
			return [X-10, X-17, X-15, X-6]
		}
		else if ([51,52,53,54].includes(X)){
			return [X-10, X-17, X-15, X-6, X+6, X+10]
		}
		else if ([24,32,40,48].includes(X)){
			return [X-10, X-17, X+15, X+6]
		}
		else if ([23,31,39,47].includes(X)){
			return [X-10, X-17, X+15, X+6, X-15, X+17]
		}
		else if ([19,20,21,22,27,28,29,30,35,36,37,38,43,44,45,46].includes(X)){
			return [X-10, X-17, X+15, X+6, X-15, X-6,X+10,X+17]
		}
	}
}

export default numberGenerator;