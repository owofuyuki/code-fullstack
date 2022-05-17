// 1. Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó

const adjacentElementsProduct = (inputArray) => {
    let maxProduct = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const compare = inputArray[i] * inputArray[i + 1];
        maxProduct = (compare > maxProduct) ? compare : maxProduct;
    }
    return maxProduct;
};

// INPUT [2, 3, -5, -2, 4]
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));
// OUTPUT 10

// 2. Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sau:
//    Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
//    Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

const alternatingSums = (weightArray) => {
    let weightFirstTeam = weightArray[0], weightSecondTeam = weightArray[1];
    for (let i = 2; i < weightArray.length; i++) {
        if (i % 2 === 0) weightFirstTeam += weightArray[i];
        else weightSecondTeam += weightArray[i];
    }
    return [weightFirstTeam, weightSecondTeam];
};

// INPUT [60, 40, 55, 75, 64]
console.log(alternatingSums([60, 40, 55, 75, 64]));
// OUTPUT [179, 115]