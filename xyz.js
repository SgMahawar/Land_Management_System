if(_transactionNum > 0 && TXLength == 0){
    if(_transactionNum > 0){
        console.log(bitcoin.POW(_prevHash));
        if(_transactionNum != 1){
            _transactionNum = _transactionNum - 2 ;
        }
        
        else
        break;
    }
    else {
        break;
    }
} //only check  0
else if (_transactionNum == 0 && TXLength > 0){

    if(n > 0){
        TXLength = bitcoin.newTransaction.length ;
        n--;
    }
    else {
        TXLength = 0;
    }
     
    _transactionNum = _transactionNum + TXLength ;



    if(_transactionNum > 0){
        console.log(bitcoin.POW(_prevHash));
        if(_transactionNum != 1){
            _transactionNum = _transactionNum - 2 ;
        }
        
        else
        break;
    }
    else {
        break;
    }


}
else if (_transactionNum > 0 && TXLength > 0){

    if(n > 0){
        TXLength = bitcoin.newTransaction.length ;
        n--;
    }
    else {
        TXLength = 0;
    }

    if(m > 0){
        _transactionNum = _transactionNum + TXLength ;
        m--;
    }

    if(_transactionNum > 0){
        console.log(bitcoin.POW(_prevHash));
        if(_transactionNum != 1){
            _transactionNum = _transactionNum - 2 ;
        }
        
        else
        break;
    }
    else {
        break;
    }
}