/*
Generated by Mix
do. ago. 21 13:57:07 2016 GMT-0500
*/

var creditCommons = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_groupID\",\"type\":\"uint256\"},{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferGroupOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"uint256\"},{\"name\":\"_subject\",\"type\":\"string\"},{\"name\":\"_text\",\"type\":\"string\"}],\"name\":\"postGroup\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"sysAdmin\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_memberG\",\"type\":\"address\"}],\"name\":\"getMember\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"int256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newSysAdmin\",\"type\":\"address\"}],\"name\":\"transferSysAdmin\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_mIndex\",\"type\":\"uint256\"}],\"name\":\"getMPbyIndex\",\"outputs\":[{\"name\":\"_getMemberID\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getNumberGroups\",\"outputs\":[{\"name\":\"_nrG\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_groupName\",\"type\":\"string\"},{\"name\":\"_currencyName\",\"type\":\"string\"},{\"name\":\"_rate\",\"type\":\"uint256\"},{\"name\":\"_debitLimit\",\"type\":\"uint256\"},{\"name\":\"_creditLimit\",\"type\":\"uint256\"},{\"name\":\"_open\",\"type\":\"bool\"}],\"name\":\"createGroup\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_gIndex\",\"type\":\"uint256\"}],\"name\":\"getGroupbyIndex\",\"outputs\":[{\"name\":\"_getGroupID\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_alias\",\"type\":\"string\"}],\"name\":\"registerSystem\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_fromAmount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newAlias\",\"type\":\"string\"}],\"name\":\"modifyAlias\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_subject\",\"type\":\"string\"},{\"name\":\"_text\",\"type\":\"string\"}],\"name\":\"postMember\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_groupG\",\"type\":\"uint256\"}],\"name\":\"getGroup\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getNumberMembers\",\"outputs\":[{\"name\":\"_nrM\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"resignGroup\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_groupJ\",\"type\":\"uint256\"}],\"name\":\"joinGroup\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_groupMember\",\"type\":\"address\"},{\"name\":\"_newDebitLimit\",\"type\":\"uint256\"},{\"name\":\"_newCreditLimit\",\"type\":\"uint256\"}],\"name\":\"modifyMemberLimits\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_groupID\",\"type\":\"uint256\"},{\"name\":\"_groupName\",\"type\":\"string\"},{\"name\":\"_currencyName\",\"type\":\"string\"},{\"name\":\"_rate\",\"type\":\"uint256\"},{\"name\":\"_debitLimit\",\"type\":\"uint256\"},{\"name\":\"_creditLimit\",\"type\":\"uint256\"},{\"name\":\"_open\",\"type\":\"bool\"}],\"name\":\"modifyGroup\",\"outputs\":[],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_creator\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_groupIDN\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_groupNameN\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_NGTimeStamp\",\"type\":\"uint256\"}],\"name\":\"NewGroup\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_modifier\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_groupIDM\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_groupNameM\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_MGTimeStamp\",\"type\":\"uint256\"}],\"name\":\"ModifyGroup\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"memberAddressN\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"memberAliasN\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_NMTimeStamp\",\"type\":\"uint256\"}],\"name\":\"NewMember\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_memberJG\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_aliasJG\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_groupJG\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_groupNameJG\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_JGTimeStamp\",\"type\":\"uint256\"}],\"name\":\"JoinGroup\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_memberRG\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_aliasRG\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_groupRG\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_groupNameRG\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_RGTimeStamp\",\"type\":\"uint256\"}],\"name\":\"ResignGroup\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_senderAmount\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"_receiver\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_receiverAmount\",\"type\":\"int256\"},{\"indexed\":false,\"name\":\"_tTimeStamp\",\"type\":\"uint256\"}],\"name\":\"Transaction\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_senderPost\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_receiverPost\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_subjectPost\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_contentPost\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_PostTimeStamp\",\"type\":\"uint256\"}],\"name\":\"PostMember\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_senderPost\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_receiverPost\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"_subjectPost\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_contentPost\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_PostTimeStamp\",\"type\":\"uint256\"}],\"name\":\"PostGroup\",\"type\":\"event\"}]",
	"codeHex": "0x60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b6136878061003f6000396000f360606040523615610103576000357c010000000000000000000000000000000000000000000000000000000090048063114673fb1461010557806311d23c7d146101265780631b7db340146101cc5780632ada259614610205578063526b91d1146102ae57806352ea5667146102c65780635e0a9b9d1461030857806367c7dc2e1461032b5780637986cbfc146103ec57806392eb487414610418578063a9059cbb1461046e578063a9b643f71461048f578063ae5f8430146104e5578063ceb606541461058b578063d1e7c78f146106a9578063e3c3f4c0146106cc578063eed02e4b146106db578063f1e7ae1f146106f3578063f2f6dcaa1461071d57610103565b005b61012460048080359060200190919080359060200190919050506107e7565b005b6101ca6004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610bf7565b005b6101d96004805050610cdf565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61021b6004808035906020019091905050610d05565b604051808715158152602001806020018681526020018581526020018481526020018381526020018281038252878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561029b5780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6102c46004808035906020019091905050610f26565b005b6102dc6004808035906020019091905050610fac565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103156004805050611053565b6040518082815260200191505060405180910390f35b6103ea6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019091908035906020019091908035906020019091908035906020019091905050611066565b005b61040260048080359060200190919050506116f4565b6040518082815260200191505060405180910390f35b61046c6004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061177e565b005b61048d6004808035906020019091908035906020019091905050611c86565b005b6104e36004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061209d565b005b6105896004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061217e565b005b6105a1600480803590602001909190505061227c565b604051808873ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200187815260200186815260200185815260200184151581526020018381038352898181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561063b5780820380516001836020036101000a031916815260200191505b508381038252888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106945780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b6106b66004805050612509565b6040518082815260200191505060405180910390f35b6106d9600480505061251c565b005b6106f16004808035906020019091905050612a7c565b005b61071b600480803590602001909190803590602001909190803590602001909190505061302d565b005b6107e56004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190803590602001909190803590602001909190803590602001909190803590602001909190505061321b565b005b60006001600050600084815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108ac5750600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15610b015782600360005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050541415610a3257816001600050600085815260200190815260200160002060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600160005060008481526020019081526020016000206000506001016000509050823373ffffffffffffffffffffffffffffffffffffffff167f302c87d90d52a4789284bae7b3069c369a940a339bc410c2b2ffd57f78c9215183426040518080602001838152602001828103825284818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610a1e5780601f106109f357610100808354040283529160200191610a1e565b820191906000526020600020905b815481529060010190602001808311610a0157829003601f168201915b5050935050505060405180910390a3610afc565b610afb33604060405190810160405280600e81526020017f5472616e736665722047726f7570000000000000000000000000000000000000815260200150608060405190810160405280605681526020017f436f6e646974696f6e7320666f722067726f7570207472616e7366657220776581526020017f7265206e6f74206d65743a20746865206e6577206f776e657220646f73206e6f81526020017f742062656c6f6e6720746f20796f75722067726f75700000000000000000000081526020015061217e565b5b610bf1565b610bf033604060405190810160405280600e81526020017f5472616e736665722047726f757000000000000000000000000000000000000081526020015060a060405190810160405280606881526020017f436f6e646974696f6e7320666f722067726f7570207472616e7366657220776581526020017f7265206e6f74206d65743a20796f7520617265206e6f72207468652067726f7581526020017f70206f776e6572206e656974686572207468652073797374656d2061646d696e81526020017f6973747261746f7200000000000000000000000000000000000000000000000081526020015061217e565b5b5b505050565b81604051808280519060200190808383829060006004602084601f0104600f02600301f1509050019150506040518091039020833373ffffffffffffffffffffffffffffffffffffffff167f9737a078fe9c464ba6a53452bde0a306ec25a93b33b891579e9d680415370a0e844260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610ccb5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a45b505050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060206040519081016040528060008152602001506000600060006000600360005060008873ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160009054906101000a900460ff16600360005060008973ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050600360005060008a73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054600360005060008b73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160005054600360005060008c73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060040160005054600360005060008d73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160005054848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f055780601f10610eda57610100808354040283529160200191610f05565b820191906000526020600020905b815481529060010190602001808311610ee857829003601f168201915b50505050509450955095509550955095509550610f1d565b91939550919395565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610fa85780600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5b50565b6000600460005080548091906001019090815481835581811511611002578183600052602060002091820191016110019190610fe3565b80821115610ffd5760008181506000905550600101610fe3565b5090565b5b50505082101561104d57600460005082815481101561000257906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080505b5b919050565b6000600260005080549050905080505b90565b60006001600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160006101000a81548160ff02191690830217905515611620576000600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054141561155157600087511415156114a857429050336001600050600083815260200190815260200160002060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555086600160005060008381526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106111af57805160ff19168380011785556111e0565b828001600101855582156111e0579182015b828111156111df5782518260005055916020019190600101906111c1565b5b50905061120b91906111ed565b8082111561120757600081815060009055506001016111ed565b5090565b505085600160005060008381526020019081526020016000206000506002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061127657805160ff19168380011785556112a7565b828001600101855582156112a7579182015b828111156112a6578251826000505591602001919060010190611288565b5b5090506112d291906112b4565b808211156112ce57600081815060009055506001016112b4565b5090565b5050846001600050600083815260200190815260200160002060005060030160005081905550836001600050600083815260200190815260200160002060005060040160005081905550826001600050600083815260200190815260200160002060005060050160005081905550816001600050600083815260200190815260200160002060005060060160006101000a81548160ff02191690830217905550803373ffffffffffffffffffffffffffffffffffffffff167f280ef5f02ee276dc1738de5e4a47b56ef01a6629d7601c21bd2af94e9cd2498b894260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156114135780820380516001836020036101000a031916815260200191505b50935050505060405180910390a361142a81612a7c565b806002600050600260005080548091906001019090815481835581811511611484578183600052602060002091820191016114839190611465565b8082111561147f5760008181506000905550600101611465565b5090565b5b505050815481101561000257906000526020600020900160005b508190555061154c565b61154b33604060405190810160405280600981526020017f4e65772047726f75700000000000000000000000000000000000000000000000815260200150606060405190810160405280603e81526020017f436f6e646974696f6e7320666f722067726f7570206372656174696f6e20776581526020017f7265206e6f74206d65743a20746865206e616d652077617320656d707479000081526020015061217e565b5b61161b565b61161a33604060405190810160405280600981526020017f4e65772047726f75700000000000000000000000000000000000000000000000815260200150608060405190810160405280604981526020017f436f6e646974696f6e7320666f722067726f7570206372656174696f6e20776581526020017f7265206e6f74206d65743a20796f752062656c6f6e6720616c7265616479207481526020017f6f20612067726f7570000000000000000000000000000000000000000000000081526020015061217e565b5b6116ea565b6116e933604060405190810160405280600981526020017f4e65772047726f75700000000000000000000000000000000000000000000000815260200150608060405190810160405280605d81526020017f436f6e646974696f6e7320666f722067726f7570206372656174696f6e20776581526020017f7265206e6f74206d65743a20796f7520617265206e6f742061206d656d62657281526020017f206f66207468652043726564697420436f6d6d6f6e732053797374656d00000081526020015061217e565b5b5b50505050505050565b600060026000508054809190600101909081548183558181151161174a57818360005260206000209182019101611749919061172b565b80821115611745576000818150600090555060010161172b565b5090565b5b50505082101561177857600260005082815481101561000257906000526020600020900160005b5054905080505b5b919050565b60008151141515611bde5760011515600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160009054906101000a900460ff161515141515611b35576001600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160006101000a81548160ff0219169083021790555080600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061189e57805160ff19168380011785556118cf565b828001600101855582156118cf579182015b828111156118ce5782518260005055916020019190600101906118b0565b5b5090506118fa91906118dc565b808211156118f657600081815060009055506001016118dc565b5090565b50506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600301600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600501600050819055503373ffffffffffffffffffffffffffffffffffffffff167fba5e544abe6e4b29d9922756f3ec93e17fc2012ed4f015dc180ec94376e08c64824260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015611a885780820380516001836020036101000a031916815260200191505b50935050505060405180910390a2336004600050600460005080548091906001019090815481835581811511611af057818360005260206000209182019101611aef9190611ad1565b80821115611aeb5760008181506000905550600101611ad1565b5090565b5b505050815481101561000257906000526020600020900160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550611bd9565b611bd833604060405190810160405280600c81526020017f526567697374726174696f6e0000000000000000000000000000000000000000815260200150606060405190810160405280603281526020017f526567697374726174696f6e206661696c65643a20796f752061726520616c7281526020017f6561647920696e207468652073797374656d000000000000000000000000000081526020015061217e565b5b611c82565b611c8133604060405190810160405280600c81526020017f526567697374726174696f6e0000000000000000000000000000000000000000815260200150606060405190810160405280603081526020017f526567697374726174696f6e206661696c65643a206e6f2076616c696420616c81526020017f696173207761732070726f76696465640000000000000000000000000000000081526020015061217e565b5b5b50565b6000600060006000600060006000600088975060016000506000600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054815260200190815260200160002060005060030160005054965060016000506000600360005060008d73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054815260200190815260200160002060005060030160005054955086945085935083858902059250600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050546000039150600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506005016000505490508188600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160005054031315611f77578083600360005060008d73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160005054011215611ece5787600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160008282825054039250508190555082600360005060008c73ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600301600082828250540192505081905550611f72565b611f7133604060405190810160405280600881526020017f5472616e73666572000000000000000000000000000000000000000000000000815260200150606060405190810160405280603381526020017f5472616e73666572206661696c65643a2072656365697665722063726564697481526020017f4c696d697420776173207375727061737365640000000000000000000000000081526020015061217e565b5b61201b565b61201a33604060405190810160405280600881526020017f5472616e73666572000000000000000000000000000000000000000000000000815260200150606060405190810160405280602e81526020017f5472616e73666572206661696c65643a20796f75722064656269744c696d697481526020017f207761732073757270617373656400000000000000000000000000000000000081526020015061217e565b5b8973ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe1b0d8b64703daa3bec6e15cd73ceb32766dfcfabf3b3e231a4e664d0dcc81448b864260405180848152602001838152602001828152602001935050505060405180910390a35b50505050505050505050565b80600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061211c57805160ff191683800117855561214d565b8280016001018555821561214d579182015b8281111561214c57825182600050559160200191906001019061212e565b5b509050612178919061215a565b80821115612174576000818150600090555060010161215a565b5090565b50505b50565b81604051808280519060200190808383829060006004602084601f0104600f02600301f15090500191505060405180910390208373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fecd5cced6e6934d19294665e3dcc2c9bc2cb906b70202ec54deb1d2f75899082844260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156122685780820380516001836020036101000a031916815260200191505b50935050505060405180910390a45b505050565b60006020604051908101604052806000815260200150602060405190810160405280600081526020015060006000600060006001600050600089815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160005060008a8152602001908152602001600020600050600101600050600160005060008b8152602001908152602001600020600050600201600050600160005060008c815260200190815260200160002060005060030160005054600160005060008d815260200190815260200160002060005060040160005054600160005060008e815260200190815260200160002060005060050160005054600160005060008f815260200190815260200160002060005060060160009054906101000a900460ff16858054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156124485780601f1061241d57610100808354040283529160200191612448565b820191906000526020600020905b81548152906001019060200180831161242b57829003601f168201915b50505050509550848054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156124e45780601f106124b9576101008083540402835291602001916124e4565b820191906000526020600020905b8154815290600101906020018083116124c757829003601f168201915b5050505050945096509650965096509650965096506124fe565b919395979092949650565b6000600460005080549050905080505b90565b60006000600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506002016000505491506001600050600083815260200190815260200160002060005060010160005090503373ffffffffffffffffffffffffffffffffffffffff1660016000506000600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156129ad576000600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506003016000505414156128b8576000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600501600050819055507f35a8f30e032a6a386ef4cbd858d9e1031ba3920bd3500473225ff4773c2e681e33600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050848442604051808673ffffffffffffffffffffffffffffffffffffffff168152602001806020018581526020018060200184815260200183810383528781815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561281d5780601f106127f25761010080835404028352916020019161281d565b820191906000526020600020905b81548152906001019060200180831161280057829003601f168201915b50508381038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156128a05780601f10612875576101008083540402835291602001916128a0565b820191906000526020600020905b81548152906001019060200180831161288357829003601f168201915b505097505050505050505060405180910390a16129a8565b6129a733604060405190810160405280600c81526020017f52657369676e2047726f7570000000000000000000000000000000000000000081526020015060a060405190810160405280606e81526020017f52657369676e696e672047726f7570206661696c65643a20796f752063616e6e81526020017f6f742072657369676e206265636175736520796f75722062616c616e6365206981526020017f73206e6f74207a65726f2e205472616e736665722062616c616e6365206f722081526020017f706179206465627420666972737400000000000000000000000000000000000081526020015061217e565b5b612a77565b612a7633604060405190810160405280600c81526020017f52657369676e2047726f75700000000000000000000000000000000000000000815260200150608060405190810160405280605d81526020017f52657369676e696e672047726f7570206661696c65643a20796f752063616e6e81526020017f6f742072657369676e206265636175736520796f752061726520746865206f7781526020017f6e65722e205472616e73666572206f776e65727368697020666972737400000081526020015061217e565b5b5b5050565b6001600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160006101000a81548160ff02191690830217905515612f8557600060016000506000838152602001908152602001600020600050600101600050805460018160011615610100020316600290049050141515612edc576000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050541415612e335780600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600301600050819055506001600050600082815260200190815260200160002060005060040160005054600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050819055506001600050600082815260200190815260200160002060005060050160005054600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600501600050819055507fd33fa3bc35f50b5247c2e059493deb82dce262b0d4bae536d2fc6fb22c0cbf2733600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050836001600050600086815260200190815260200160002060005060010160005042604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018060200185815260200180602001848152602001838103835287818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015612d985780601f10612d6d57610100808354040283529160200191612d98565b820191906000526020600020905b815481529060010190602001808311612d7b57829003601f168201915b5050838103825285818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015612e1b5780601f10612df057610100808354040283529160200191612e1b565b820191906000526020600020905b815481529060010190602001808311612dfe57829003601f168201915b505097505050505050505060405180910390a1612ed7565b612ed633604060405190810160405280600a81526020017f4a6f696e2047726f757000000000000000000000000000000000000000000000815260200150606060405190810160405280603081526020017f4a6f696e696e672047726f7570206661696c65643a20796f752061726520616c81526020017f726561647920696e20612047726f75700000000000000000000000000000000081526020015061217e565b5b612f80565b612f7f33604060405190810160405280600a81526020017f4a6f696e2047726f757000000000000000000000000000000000000000000000815260200150606060405190810160405280602e81526020017f4a6f696e696e672047726f7570206661696c65643a207468652047726f75702081526020017f646f6573206e6f7420657869737400000000000000000000000000000000000081526020015061217e565b5b613029565b61302833604060405190810160405280600a81526020017f4a6f696e2047726f757000000000000000000000000000000000000000000000815260200150606060405190810160405280603a81526020017f4a6f696e696e672047726f7570206661696c65643a20796f7520617265206e6f81526020017f74207265676973746572656420696e207468652073797374656d00000000000081526020015061217e565b5b5b50565b60016000506000600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561314b5781600360005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506004016000508190555080600360005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160005081905550613215565b61321433604060405190810160405280601481526020017f4d6f64696679206d656d626572206c696d697473000000000000000000000000815260200150608060405190810160405280604181526020017f4d6f64696669636174696f6e206f66206d656d626572206c696d69747320666181526020017f696c65643a206f6e6c79207468652067726f7570206f776e65722063616e206481526020017f6f0000000000000000000000000000000000000000000000000000000000000081526020015061217e565b5b5b505050565b6001600050600088815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156135b3576000865114151561335e5785600160005060008981526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106132ff57805160ff1916838001178555613330565b82800160010185558215613330579182015b8281111561332f578251826000505591602001919060010190613311565b5b50905061335b919061333d565b80821115613357576000818150600090555060010161333d565b5090565b50505b600085511415156134315784600160005060008981526020019081526020016000206000506002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106133d257805160ff1916838001178555613403565b82800160010185558215613403579182015b828111156134025782518260005055916020019190600101906133e4565b5b50905061342e9190613410565b8082111561342a5760008181506000905550600101613410565b5090565b50505b600084141515613460578360016000506000898152602001908152602001600020600050600301600050819055505b60008314151561348f578260016000506000898152602001908152602001600020600050600401600050819055505b6000821415156134be578160016000506000898152602001908152602001600020600050600501600050819055505b6001151581151514156134ff5760016001600050600089815260200190815260200160002060005060060160006101000a81548160ff021916908302179055505b863373ffffffffffffffffffffffffffffffffffffffff167f302c87d90d52a4789284bae7b3069c369a940a339bc410c2b2ffd57f78c92151884260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156135a05780820380516001836020036101000a031916815260200191505b50935050505060405180910390a361367d565b61367c33604060405190810160405280600c81526020017f4d6f646966792047726f75700000000000000000000000000000000000000000815260200150608060405190810160405280604b81526020017f436f6e646974696f6e7320666f722067726f7570206d6f64696669636174696f81526020017f6e2077657265206e6f74206d65743a20796f7520617265206e6f74207468652081526020017f67726f7570206f776e657200000000000000000000000000000000000000000081526020015061217e565b5b5b5050505050505056",
	"name": "creditCommons"
}

