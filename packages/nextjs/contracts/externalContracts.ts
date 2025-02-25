import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const externalContracts = {
    // 31337: {
    //   DelegationManager: {

    //     address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    //     abi: [{"type":"function","name":"DELEGATION_APPROVAL_TYPEHASH","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"DOMAIN_TYPEHASH","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"STAKER_DELEGATION_TYPEHASH","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"beaconChainETHStrategy","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IStrategy"}],"stateMutability":"view"},{"type":"function","name":"calculateCurrentStakerDelegationDigestHash","inputs":[{"name":"staker","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"},{"name":"expiry","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"calculateDelegationApprovalDigestHash","inputs":[{"name":"staker","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"},{"name":"_delegationApprover","type":"address","internalType":"address"},{"name":"approverSalt","type":"bytes32","internalType":"bytes32"},{"name":"expiry","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"calculateStakerDelegationDigestHash","inputs":[{"name":"staker","type":"address","internalType":"address"},{"name":"_stakerNonce","type":"uint256","internalType":"uint256"},{"name":"operator","type":"address","internalType":"address"},{"name":"expiry","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"calculateWithdrawalRoot","inputs":[{"name":"withdrawal","type":"tuple","internalType":"struct IDelegationManager.Withdrawal","components":[{"name":"staker","type":"address","internalType":"address"},{"name":"delegatedTo","type":"address","internalType":"address"},{"name":"withdrawer","type":"address","internalType":"address"},{"name":"nonce","type":"uint256","internalType":"uint256"},{"name":"startBlock","type":"uint32","internalType":"uint32"},{"name":"strategies","type":"address[]","internalType":"contract IStrategy[]"},{"name":"shares","type":"uint256[]","internalType":"uint256[]"}]}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"pure"},{"type":"function","name":"completeQueuedWithdrawal","inputs":[{"name":"withdrawal","type":"tuple","internalType":"struct IDelegationManager.Withdrawal","components":[{"name":"staker","type":"address","internalType":"address"},{"name":"delegatedTo","type":"address","internalType":"address"},{"name":"withdrawer","type":"address","internalType":"address"},{"name":"nonce","type":"uint256","internalType":"uint256"},{"name":"startBlock","type":"uint32","internalType":"uint32"},{"name":"strategies","type":"address[]","internalType":"contract IStrategy[]"},{"name":"shares","type":"uint256[]","internalType":"uint256[]"}]},{"name":"tokens","type":"address[]","internalType":"contract IERC20[]"},{"name":"middlewareTimesIndex","type":"uint256","internalType":"uint256"},{"name":"receiveAsTokens","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"completeQueuedWithdrawals","inputs":[{"name":"withdrawals","type":"tuple[]","internalType":"struct IDelegationManager.Withdrawal[]","components":[{"name":"staker","type":"address","internalType":"address"},{"name":"delegatedTo","type":"address","internalType":"address"},{"name":"withdrawer","type":"address","internalType":"address"},{"name":"nonce","type":"uint256","internalType":"uint256"},{"name":"startBlock","type":"uint32","internalType":"uint32"},{"name":"strategies","type":"address[]","internalType":"contract IStrategy[]"},{"name":"shares","type":"uint256[]","internalType":"uint256[]"}]},{"name":"tokens","type":"address[][]","internalType":"contract IERC20[][]"},{"name":"middlewareTimesIndexes","type":"uint256[]","internalType":"uint256[]"},{"name":"receiveAsTokens","type":"bool[]","internalType":"bool[]"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"cumulativeWithdrawalsQueued","inputs":[{"name":"staker","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"decreaseDelegatedShares","inputs":[{"name":"staker","type":"address","internalType":"address"},{"name":"strategy","type":"address","internalType":"contract IStrategy"},{"name":"shares","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"delegateTo","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"approverSignatureAndExpiry","type":"tuple","internalType":"struct ISignatureUtils.SignatureWithExpiry","components":[{"name":"signature","type":"bytes","internalType":"bytes"},{"name":"expiry","type":"uint256","internalType":"uint256"}]},{"name":"approverSalt","type":"bytes32","internalType":"bytes32"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"delegateToBySignature","inputs":[{"name":"staker","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"},{"name":"stakerSignatureAndExpiry","type":"tuple","internalType":"struct ISignatureUtils.SignatureWithExpiry","components":[{"name":"signature","type":"bytes","internalType":"bytes"},{"name":"expiry","type":"uint256","internalType":"uint256"}]},{"name":"approverSignatureAndExpiry","type":"tuple","internalType":"struct ISignatureUtils.SignatureWithExpiry","components":[{"name":"signature","type":"bytes","internalType":"bytes"},{"name":"expiry","type":"uint256","internalType":"uint256"}]},{"name":"approverSalt","type":"bytes32","internalType":"bytes32"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"delegatedTo","inputs":[{"name":"staker","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"delegationApprover","inputs":[{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"delegationApproverSaltIsSpent","inputs":[{"name":"_delegationApprover","type":"address","internalType":"address"},{"name":"salt","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"domainSeparator","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"earningsReceiver","inputs":[{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getOperatorShares","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"strategies","type":"address[]","internalType":"contract IStrategy[]"}],"outputs":[{"name":"","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"getWithdrawalDelay","inputs":[{"name":"strategies","type":"address[]","internalType":"contract IStrategy[]"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"increaseDelegatedShares","inputs":[{"name":"staker","type":"address","internalType":"address"},{"name":"strategy","type":"address","internalType":"contract IStrategy"},{"name":"shares","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"isDelegated","inputs":[{"name":"staker","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"isOperator","inputs":[{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"migrateQueuedWithdrawals","inputs":[{"name":"withdrawalsToQueue","type":"tuple[]","internalType":"struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal[]","components":[{"name":"strategies","type":"address[]","internalType":"contract IStrategy[]"},{"name":"shares","type":"uint256[]","internalType":"uint256[]"},{"name":"staker","type":"address","internalType":"address"},{"name":"withdrawerAndNonce","type":"tuple","internalType":"struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce","components":[{"name":"withdrawer","type":"address","internalType":"address"},{"name":"nonce","type":"uint96","internalType":"uint96"}]},{"name":"withdrawalStartBlock","type":"uint32","internalType":"uint32"},{"name":"delegatedAddress","type":"address","internalType":"address"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"minWithdrawalDelayBlocks","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"modifyOperatorDetails","inputs":[{"name":"newOperatorDetails","type":"tuple","internalType":"struct IDelegationManager.OperatorDetails","components":[{"name":"earningsReceiver","type":"address","internalType":"address"},{"name":"delegationApprover","type":"address","internalType":"address"},{"name":"stakerOptOutWindowBlocks","type":"uint32","internalType":"uint32"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"operatorDetails","inputs":[{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"tuple","internalType":"struct IDelegationManager.OperatorDetails","components":[{"name":"earningsReceiver","type":"address","internalType":"address"},{"name":"delegationApprover","type":"address","internalType":"address"},{"name":"stakerOptOutWindowBlocks","type":"uint32","internalType":"uint32"}]}],"stateMutability":"view"},{"type":"function","name":"operatorShares","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"strategy","type":"address","internalType":"contract IStrategy"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"queueWithdrawals","inputs":[{"name":"queuedWithdrawalParams","type":"tuple[]","internalType":"struct IDelegationManager.QueuedWithdrawalParams[]","components":[{"name":"strategies","type":"address[]","internalType":"contract IStrategy[]"},{"name":"shares","type":"uint256[]","internalType":"uint256[]"},{"name":"withdrawer","type":"address","internalType":"address"}]}],"outputs":[{"name":"","type":"bytes32[]","internalType":"bytes32[]"}],"stateMutability":"nonpayable"},{"type":"function","name":"registerAsOperator","inputs":[{"name":"registeringOperatorDetails","type":"tuple","internalType":"struct IDelegationManager.OperatorDetails","components":[{"name":"earningsReceiver","type":"address","internalType":"address"},{"name":"delegationApprover","type":"address","internalType":"address"},{"name":"stakerOptOutWindowBlocks","type":"uint32","internalType":"uint32"}]},{"name":"metadataURI","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"stakerNonce","inputs":[{"name":"staker","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"stakerOptOutWindowBlocks","inputs":[{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"strategyWithdrawalDelayBlocks","inputs":[{"name":"strategy","type":"address","internalType":"contract IStrategy"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"undelegate","inputs":[{"name":"staker","type":"address","internalType":"address"}],"outputs":[{"name":"withdrawalRoot","type":"bytes32[]","internalType":"bytes32[]"}],"stateMutability":"nonpayable"},{"type":"function","name":"updateOperatorMetadataURI","inputs":[{"name":"metadataURI","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"MinWithdrawalDelayBlocksSet","inputs":[{"name":"previousValue","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"newValue","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OperatorDetailsModified","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"newOperatorDetails","type":"tuple","indexed":false,"internalType":"struct IDelegationManager.OperatorDetails","components":[{"name":"earningsReceiver","type":"address","internalType":"address"},{"name":"delegationApprover","type":"address","internalType":"address"},{"name":"stakerOptOutWindowBlocks","type":"uint32","internalType":"uint32"}]}],"anonymous":false},{"type":"event","name":"OperatorMetadataURIUpdated","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"metadataURI","type":"string","indexed":false,"internalType":"string"}],"anonymous":false},{"type":"event","name":"OperatorRegistered","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"operatorDetails","type":"tuple","indexed":false,"internalType":"struct IDelegationManager.OperatorDetails","components":[{"name":"earningsReceiver","type":"address","internalType":"address"},{"name":"delegationApprover","type":"address","internalType":"address"},{"name":"stakerOptOutWindowBlocks","type":"uint32","internalType":"uint32"}]}],"anonymous":false},{"type":"event","name":"OperatorSharesDecreased","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"staker","type":"address","indexed":false,"internalType":"address"},{"name":"strategy","type":"address","indexed":false,"internalType":"contract IStrategy"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OperatorSharesIncreased","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"staker","type":"address","indexed":false,"internalType":"address"},{"name":"strategy","type":"address","indexed":false,"internalType":"contract IStrategy"},{"name":"shares","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"StakerDelegated","inputs":[{"name":"staker","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"StakerForceUndelegated","inputs":[{"name":"staker","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"StakerUndelegated","inputs":[{"name":"staker","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"StrategyWithdrawalDelayBlocksSet","inputs":[{"name":"strategy","type":"address","indexed":false,"internalType":"contract IStrategy"},{"name":"previousValue","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"newValue","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"WithdrawalCompleted","inputs":[{"name":"withdrawalRoot","type":"bytes32","indexed":false,"internalType":"bytes32"}],"anonymous":false},{"type":"event","name":"WithdrawalMigrated","inputs":[{"name":"oldWithdrawalRoot","type":"bytes32","indexed":false,"internalType":"bytes32"},{"name":"newWithdrawalRoot","type":"bytes32","indexed":false,"internalType":"bytes32"}],"anonymous":false},{"type":"event","name":"WithdrawalQueued","inputs":[{"name":"withdrawalRoot","type":"bytes32","indexed":false,"internalType":"bytes32"},{"name":"withdrawal","type":"tuple","indexed":false,"internalType":"struct IDelegationManager.Withdrawal","components":[{"name":"staker","type":"address","internalType":"address"},{"name":"delegatedTo","type":"address","internalType":"address"},{"name":"withdrawer","type":"address","internalType":"address"},{"name":"nonce","type":"uint256","internalType":"uint256"},{"name":"startBlock","type":"uint32","internalType":"uint32"},{"name":"strategies","type":"address[]","internalType":"contract IStrategy[]"},{"name":"shares","type":"uint256[]","internalType":"uint256[]"}]}],"anonymous":false}],
    //   },
    //   AVSDirectory: {
    //     address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    //     abi: [{"type":"constructor","inputs":[{"name":"_delegation","type":"address","internalType":"contract IDelegationManager"}],"stateMutability":"nonpayable"},{"type":"function","name":"DOMAIN_TYPEHASH","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"OPERATOR_AVS_REGISTRATION_TYPEHASH","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"avsOperatorStatus","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint8","internalType":"enum IAVSDirectory.OperatorAVSRegistrationStatus"}],"stateMutability":"view"},{"type":"function","name":"calculateOperatorAVSRegistrationDigestHash","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"avs","type":"address","internalType":"address"},{"name":"salt","type":"bytes32","internalType":"bytes32"},{"name":"expiry","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"cancelSalt","inputs":[{"name":"salt","type":"bytes32","internalType":"bytes32"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"delegation","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IDelegationManager"}],"stateMutability":"view"},{"type":"function","name":"deregisterOperatorFromAVS","inputs":[{"name":"operator","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"domainSeparator","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"initialize","inputs":[{"name":"initialOwner","type":"address","internalType":"address"},{"name":"_pauserRegistry","type":"address","internalType":"contract IPauserRegistry"},{"name":"initialPausedStatus","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"operatorSaltIsSpent","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"pause","inputs":[{"name":"newPausedStatus","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"pauseAll","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"paused","inputs":[{"name":"index","type":"uint8","internalType":"uint8"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"paused","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"pauserRegistry","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IPauserRegistry"}],"stateMutability":"view"},{"type":"function","name":"registerOperatorToAVS","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"operatorSignature","type":"tuple","internalType":"struct ISignatureUtils.SignatureWithSaltAndExpiry","components":[{"name":"signature","type":"bytes","internalType":"bytes"},{"name":"salt","type":"bytes32","internalType":"bytes32"},{"name":"expiry","type":"uint256","internalType":"uint256"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setPauserRegistry","inputs":[{"name":"newPauserRegistry","type":"address","internalType":"contract IPauserRegistry"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"unpause","inputs":[{"name":"newPausedStatus","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"updateAVSMetadataURI","inputs":[{"name":"metadataURI","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"AVSMetadataURIUpdated","inputs":[{"name":"avs","type":"address","indexed":true,"internalType":"address"},{"name":"metadataURI","type":"string","indexed":false,"internalType":"string"}],"anonymous":false},{"type":"event","name":"Initialized","inputs":[{"name":"version","type":"uint8","indexed":false,"internalType":"uint8"}],"anonymous":false},{"type":"event","name":"OperatorAVSRegistrationStatusUpdated","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"avs","type":"address","indexed":true,"internalType":"address"},{"name":"status","type":"uint8","indexed":false,"internalType":"enum IAVSDirectory.OperatorAVSRegistrationStatus"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Paused","inputs":[{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"newPausedStatus","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"PauserRegistrySet","inputs":[{"name":"pauserRegistry","type":"address","indexed":false,"internalType":"contract IPauserRegistry"},{"name":"newPauserRegistry","type":"address","indexed":false,"internalType":"contract IPauserRegistry"}],"anonymous":false},{"type":"event","name":"Unpaused","inputs":[{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"newPausedStatus","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}],
    //   },
    //   HelloWorldServiceManager: {
    //     address: "0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB",
    //     abi: [{"type":"constructor","inputs":[{"name":"_avsDirectory","type":"address","internalType":"contract IAVSDirectory"},{"name":"_registryCoordinator","type":"address","internalType":"contract IRegistryCoordinator"},{"name":"_stakeRegistry","type":"address","internalType":"contract IStakeRegistry"}],"stateMutability":"nonpayable"},{"type":"function","name":"allTaskHashes","inputs":[{"name":"","type":"uint32","internalType":"uint32"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"allTaskResponses","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint32","internalType":"uint32"}],"outputs":[{"name":"","type":"bytes","internalType":"bytes"}],"stateMutability":"view"},{"type":"function","name":"avsDirectory","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"createNewTask","inputs":[{"name":"name","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"deregisterOperatorFromAVS","inputs":[{"name":"operator","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"getOperatorRestakedStrategies","inputs":[{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"address[]","internalType":"address[]"}],"stateMutability":"view"},{"type":"function","name":"getRestakeableStrategies","inputs":[],"outputs":[{"name":"","type":"address[]","internalType":"address[]"}],"stateMutability":"view"},{"type":"function","name":"latestTaskNum","inputs":[],"outputs":[{"name":"","type":"uint32","internalType":"uint32"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"pause","inputs":[{"name":"newPausedStatus","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"pauseAll","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"paused","inputs":[{"name":"index","type":"uint8","internalType":"uint8"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"paused","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"pauserRegistry","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IPauserRegistry"}],"stateMutability":"view"},{"type":"function","name":"payForRange","inputs":[{"name":"rangePayments","type":"tuple[]","internalType":"struct IPaymentCoordinator.RangePayment[]","components":[{"name":"strategiesAndMultipliers","type":"tuple[]","internalType":"struct IPaymentCoordinator.StrategyAndMultiplier[]","components":[{"name":"strategy","type":"address","internalType":"contract IStrategy"},{"name":"multiplier","type":"uint96","internalType":"uint96"}]},{"name":"token","type":"address","internalType":"contract IERC20"},{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"startTimestamp","type":"uint32","internalType":"uint32"},{"name":"duration","type":"uint32","internalType":"uint32"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"registerOperatorToAVS","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"operatorSignature","type":"tuple","internalType":"struct ISignatureUtils.SignatureWithSaltAndExpiry","components":[{"name":"signature","type":"bytes","internalType":"bytes"},{"name":"salt","type":"bytes32","internalType":"bytes32"},{"name":"expiry","type":"uint256","internalType":"uint256"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"registryCoordinator","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IRegistryCoordinator"}],"stateMutability":"view"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"respondToTask","inputs":[{"name":"task","type":"tuple","internalType":"struct IHelloWorldServiceManager.Task","components":[{"name":"name","type":"string","internalType":"string"},{"name":"taskCreatedBlock","type":"uint32","internalType":"uint32"}]},{"name":"referenceTaskIndex","type":"uint32","internalType":"uint32"},{"name":"signature","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setPauserRegistry","inputs":[{"name":"newPauserRegistry","type":"address","internalType":"contract IPauserRegistry"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"unpause","inputs":[{"name":"newPausedStatus","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"updateAVSMetadataURI","inputs":[{"name":"_metadataURI","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"Initialized","inputs":[{"name":"version","type":"uint8","indexed":false,"internalType":"uint8"}],"anonymous":false},{"type":"event","name":"NewTaskCreated","inputs":[{"name":"taskIndex","type":"uint32","indexed":true,"internalType":"uint32"},{"name":"task","type":"tuple","indexed":false,"internalType":"struct IHelloWorldServiceManager.Task","components":[{"name":"name","type":"string","internalType":"string"},{"name":"taskCreatedBlock","type":"uint32","internalType":"uint32"}]}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Paused","inputs":[{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"newPausedStatus","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"PauserRegistrySet","inputs":[{"name":"pauserRegistry","type":"address","indexed":false,"internalType":"contract IPauserRegistry"},{"name":"newPauserRegistry","type":"address","indexed":false,"internalType":"contract IPauserRegistry"}],"anonymous":false},{"type":"event","name":"TaskResponded","inputs":[{"name":"taskIndex","type":"uint32","indexed":true,"internalType":"uint32"},{"name":"task","type":"tuple","indexed":false,"internalType":"struct IHelloWorldServiceManager.Task","components":[{"name":"name","type":"string","internalType":"string"},{"name":"taskCreatedBlock","type":"uint32","internalType":"uint32"}]},{"name":"operator","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Unpaused","inputs":[{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"newPausedStatus","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false}]
    //   },
    //   ECDSAStakeRegistry: {
    //     address: "0x9E545E3C0baAB3E08CdfD552C960A1050f373042",
    //     abi: [
    //       {
    //         type: "constructor",
    //         inputs: [
    //           {
    //             name: "_delegationManager",
    //             type: "address",
    //             internalType: "contract IDelegationManager",
    //           },
    //         ],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "deregisterOperator",
    //         inputs: [],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "getLastCheckpointOperatorWeight",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "getLastCheckpointThresholdWeight",
    //         inputs: [],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "getLastCheckpointThresholdWeightAtBlock",
    //         inputs: [
    //           {
    //             name: "_blockNumber",
    //             type: "uint32",
    //             internalType: "uint32",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "getLastCheckpointTotalWeight",
    //         inputs: [],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "getLastCheckpointTotalWeightAtBlock",
    //         inputs: [
    //           {
    //             name: "_blockNumber",
    //             type: "uint32",
    //             internalType: "uint32",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "getLastestOperatorSigningKey",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "getOperatorSigningKeyAtBlock",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             internalType: "address",
    //           },
    //           {
    //             name: "_blockNumber",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "getOperatorWeight",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "getOperatorWeightAtBlock",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             internalType: "address",
    //           },
    //           {
    //             name: "_blockNumber",
    //             type: "uint32",
    //             internalType: "uint32",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "initialize",
    //         inputs: [
    //           {
    //             name: "_serviceManager",
    //             type: "address",
    //             internalType: "address",
    //           },
    //           {
    //             name: "_thresholdWeight",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //           {
    //             name: "_quorum",
    //             type: "tuple",
    //             internalType: "struct Quorum",
    //             components: [
    //               {
    //                 name: "strategies",
    //                 type: "tuple[]",
    //                 internalType: "struct StrategyParams[]",
    //                 components: [
    //                   {
    //                     name: "strategy",
    //                     type: "address",
    //                     internalType: "contract IStrategy",
    //                   },
    //                   {
    //                     name: "multiplier",
    //                     type: "uint96",
    //                     internalType: "uint96",
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "isValidSignature",
    //         inputs: [
    //           {
    //             name: "_dataHash",
    //             type: "bytes32",
    //             internalType: "bytes32",
    //           },
    //           {
    //             name: "_signatureData",
    //             type: "bytes",
    //             internalType: "bytes",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "bytes4",
    //             internalType: "bytes4",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "minimumWeight",
    //         inputs: [],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "operatorRegistered",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "bool",
    //             internalType: "bool",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "owner",
    //         inputs: [],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "quorum",
    //         inputs: [],
    //         outputs: [
    //           {
    //             name: "",
    //             type: "tuple",
    //             internalType: "struct Quorum",
    //             components: [
    //               {
    //                 name: "strategies",
    //                 type: "tuple[]",
    //                 internalType: "struct StrategyParams[]",
    //                 components: [
    //                   {
    //                     name: "strategy",
    //                     type: "address",
    //                     internalType: "contract IStrategy",
    //                   },
    //                   {
    //                     name: "multiplier",
    //                     type: "uint96",
    //                     internalType: "uint96",
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //         stateMutability: "view",
    //       },
    //       {
    //         type: "function",
    //         name: "registerOperatorWithSignature",
    //         inputs: [
    //           {
    //             name: "_operatorSignature",
    //             type: "tuple",
    //             internalType: "struct ISignatureUtils.SignatureWithSaltAndExpiry",
    //             components: [
    //               {
    //                 name: "signature",
    //                 type: "bytes",
    //                 internalType: "bytes",
    //               },
    //               {
    //                 name: "salt",
    //                 type: "bytes32",
    //                 internalType: "bytes32",
    //               },
    //               {
    //                 name: "expiry",
    //                 type: "uint256",
    //                 internalType: "uint256",
    //               },
    //             ],
    //           },
    //           {
    //             name: "_signingKey",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "renounceOwnership",
    //         inputs: [],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "transferOwnership",
    //         inputs: [
    //           {
    //             name: "newOwner",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "updateMinimumWeight",
    //         inputs: [
    //           {
    //             name: "_newMinimumWeight",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //           {
    //             name: "_operators",
    //             type: "address[]",
    //             internalType: "address[]",
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "updateOperatorSigningKey",
    //         inputs: [
    //           {
    //             name: "_newSigningKey",
    //             type: "address",
    //             internalType: "address",
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "updateOperators",
    //         inputs: [
    //           {
    //             name: "_operators",
    //             type: "address[]",
    //             internalType: "address[]",
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "updateOperatorsForQuorum",
    //         inputs: [
    //           {
    //             name: "operatorsPerQuorum",
    //             type: "address[][]",
    //             internalType: "address[][]",
    //           },
    //           {
    //             name: "",
    //             type: "bytes",
    //             internalType: "bytes",
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "updateQuorumConfig",
    //         inputs: [
    //           {
    //             name: "_quorum",
    //             type: "tuple",
    //             internalType: "struct Quorum",
    //             components: [
    //               {
    //                 name: "strategies",
    //                 type: "tuple[]",
    //                 internalType: "struct StrategyParams[]",
    //                 components: [
    //                   {
    //                     name: "strategy",
    //                     type: "address",
    //                     internalType: "contract IStrategy",
    //                   },
    //                   {
    //                     name: "multiplier",
    //                     type: "uint96",
    //                     internalType: "uint96",
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             name: "_operators",
    //             type: "address[]",
    //             internalType: "address[]",
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "function",
    //         name: "updateStakeThreshold",
    //         inputs: [
    //           {
    //             name: "_thresholdWeight",
    //             type: "uint256",
    //             internalType: "uint256",
    //           },
    //         ],
    //         outputs: [],
    //         stateMutability: "nonpayable",
    //       },
    //       {
    //         type: "event",
    //         name: "Initialized",
    //         inputs: [
    //           {
    //             name: "version",
    //             type: "uint8",
    //             indexed: false,
    //             internalType: "uint8",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "MinimumWeightUpdated",
    //         inputs: [
    //           {
    //             name: "_old",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //           {
    //             name: "_new",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "OperatorDeregistered",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //           {
    //             name: "_avs",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "OperatorRegistered",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //           {
    //             name: "_avs",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "OperatorWeightUpdated",
    //         inputs: [
    //           {
    //             name: "_operator",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //           {
    //             name: "oldWeight",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //           {
    //             name: "newWeight",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "OwnershipTransferred",
    //         inputs: [
    //           {
    //             name: "previousOwner",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //           {
    //             name: "newOwner",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "QuorumUpdated",
    //         inputs: [
    //           {
    //             name: "_old",
    //             type: "tuple",
    //             indexed: false,
    //             internalType: "struct Quorum",
    //             components: [
    //               {
    //                 name: "strategies",
    //                 type: "tuple[]",
    //                 internalType: "struct StrategyParams[]",
    //                 components: [
    //                   {
    //                     name: "strategy",
    //                     type: "address",
    //                     internalType: "contract IStrategy",
    //                   },
    //                   {
    //                     name: "multiplier",
    //                     type: "uint96",
    //                     internalType: "uint96",
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             name: "_new",
    //             type: "tuple",
    //             indexed: false,
    //             internalType: "struct Quorum",
    //             components: [
    //               {
    //                 name: "strategies",
    //                 type: "tuple[]",
    //                 internalType: "struct StrategyParams[]",
    //                 components: [
    //                   {
    //                     name: "strategy",
    //                     type: "address",
    //                     internalType: "contract IStrategy",
    //                   },
    //                   {
    //                     name: "multiplier",
    //                     type: "uint96",
    //                     internalType: "uint96",
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "SigningKeyUpdate",
    //         inputs: [
    //           {
    //             name: "operator",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //           {
    //             name: "updateBlock",
    //             type: "uint256",
    //             indexed: true,
    //             internalType: "uint256",
    //           },
    //           {
    //             name: "newSigningKey",
    //             type: "address",
    //             indexed: true,
    //             internalType: "address",
    //           },
    //           {
    //             name: "oldSigningKey",
    //             type: "address",
    //             indexed: false,
    //             internalType: "address",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "ThresholdWeightUpdated",
    //         inputs: [
    //           {
    //             name: "_thresholdWeight",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "TotalWeightUpdated",
    //         inputs: [
    //           {
    //             name: "oldTotalWeight",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //           {
    //             name: "newTotalWeight",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "event",
    //         name: "UpdateMinimumWeight",
    //         inputs: [
    //           {
    //             name: "oldMinimumWeight",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //           {
    //             name: "newMinimumWeight",
    //             type: "uint256",
    //             indexed: false,
    //             internalType: "uint256",
    //           },
    //         ],
    //         anonymous: false,
    //       },
    //       {
    //         type: "error",
    //         name: "InsufficientSignedStake",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "InsufficientWeight",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "InvalidLength",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "InvalidQuorum",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "InvalidReferenceBlock",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "InvalidSignature",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "InvalidSignedWeight",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "InvalidThreshold",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "LengthMismatch",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "MustUpdateAllOperators",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "NotSorted",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "OperatorAlreadyRegistered",
    //         inputs: [],
    //       },
    //       {
    //         type: "error",
    //         name: "OperatorNotRegistered",
    //         inputs: [],
    //       },
    //     ]
    //   }
    // },

    17000: {
      LotteryServiceManager: {
          address: "0x1081ded255574EC1dF6948DfEc3442c54B1De19A", // implementation
          // 0xA0De05Ba7e140C2fdc0438e8DC7c41a78629D435 // proxy
          abi: [
              {
                  "type": "constructor",
                  "inputs": [
                      {
                          "name": "_avsDirectory",
                          "type": "address",
                          "internalType": "address"
                      },
                      {
                          "name": "_stakeRegistry",
                          "type": "address",
                          "internalType": "address"
                      },
                      {
                          "name": "_delegationManager",
                          "type": "address",
                          "internalType": "address"
                      }
                  ],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "allTaskHashes",
                  "inputs": [
                      {
                          "name": "",
                          "type": "uint32",
                          "internalType": "uint32"
                      }
                  ],
                  "outputs": [
                      {
                          "name": "",
                          "type": "bytes32",
                          "internalType": "bytes32"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "allTaskResponses",
                  "inputs": [
                      {
                          "name": "",
                          "type": "address",
                          "internalType": "address"
                      },
                      {
                          "name": "",
                          "type": "uint32",
                          "internalType": "uint32"
                      }
                  ],
                  "outputs": [
                      {
                          "name": "",
                          "type": "bytes",
                          "internalType": "bytes"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "avsDirectory",
                  "inputs": [],
                  "outputs": [
                      {
                          "name": "",
                          "type": "address",
                          "internalType": "address"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "createNewTask",
                  "inputs": [
                      {
                          "name": "lotteryId",
                          "type": "uint32",
                          "internalType": "uint32"
                      },
                      {
                          "name": "lotteryAddress",
                          "type": "string",
                          "internalType": "string"
                      },
                      {
                          "name": "allowedYieldProtocols",
                          "type": "string[]",
                          "internalType": "string[]"
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "deregisterOperatorFromAVS",
                  "inputs": [
                      {
                          "name": "operator",
                          "type": "address",
                          "internalType": "address"
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "getOperatorRestakedStrategies",
                  "inputs": [
                      {
                          "name": "_operator",
                          "type": "address",
                          "internalType": "address"
                      }
                  ],
                  "outputs": [
                      {
                          "name": "",
                          "type": "address[]",
                          "internalType": "address[]"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "getRestakeableStrategies",
                  "inputs": [],
                  "outputs": [
                      {
                          "name": "",
                          "type": "address[]",
                          "internalType": "address[]"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "latestTaskNum",
                  "inputs": [],
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint32",
                          "internalType": "uint32"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "operatorHasMinimumWeight",
                  "inputs": [
                      {
                          "name": "operator",
                          "type": "address",
                          "internalType": "address"
                      }
                  ],
                  "outputs": [
                      {
                          "name": "",
                          "type": "bool",
                          "internalType": "bool"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "owner",
                  "inputs": [],
                  "outputs": [
                      {
                          "name": "",
                          "type": "address",
                          "internalType": "address"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "pause",
                  "inputs": [
                      {
                          "name": "newPausedStatus",
                          "type": "uint256",
                          "internalType": "uint256"
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "pauseAll",
                  "inputs": [],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "paused",
                  "inputs": [
                      {
                          "name": "index",
                          "type": "uint8",
                          "internalType": "uint8"
                      }
                  ],
                  "outputs": [
                      {
                          "name": "",
                          "type": "bool",
                          "internalType": "bool"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "paused",
                  "inputs": [],
                  "outputs": [
                      {
                          "name": "",
                          "type": "uint256",
                          "internalType": "uint256"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "pauserRegistry",
                  "inputs": [],
                  "outputs": [
                      {
                          "name": "",
                          "type": "address",
                          "internalType": "contract IPauserRegistry"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "payForRange",
                  "inputs": [
                      {
                          "name": "rangePayments",
                          "type": "tuple[]",
                          "internalType": "struct IPaymentCoordinator.RangePayment[]",
                          "components": [
                              {
                                  "name": "strategiesAndMultipliers",
                                  "type": "tuple[]",
                                  "internalType": "struct IPaymentCoordinator.StrategyAndMultiplier[]",
                                  "components": [
                                      {
                                          "name": "strategy",
                                          "type": "address",
                                          "internalType": "contract IStrategy"
                                      },
                                      {
                                          "name": "multiplier",
                                          "type": "uint96",
                                          "internalType": "uint96"
                                      }
                                  ]
                              },
                              {
                                  "name": "token",
                                  "type": "address",
                                  "internalType": "contract IERC20"
                              },
                              {
                                  "name": "amount",
                                  "type": "uint256",
                                  "internalType": "uint256"
                              },
                              {
                                  "name": "startTimestamp",
                                  "type": "uint32",
                                  "internalType": "uint32"
                              },
                              {
                                  "name": "duration",
                                  "type": "uint32",
                                  "internalType": "uint32"
                              }
                          ]
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "registerOperatorToAVS",
                  "inputs": [
                      {
                          "name": "operator",
                          "type": "address",
                          "internalType": "address"
                      },
                      {
                          "name": "operatorSignature",
                          "type": "tuple",
                          "internalType": "struct ISignatureUtils.SignatureWithSaltAndExpiry",
                          "components": [
                              {
                                  "name": "signature",
                                  "type": "bytes",
                                  "internalType": "bytes"
                              },
                              {
                                  "name": "salt",
                                  "type": "bytes32",
                                  "internalType": "bytes32"
                              },
                              {
                                  "name": "expiry",
                                  "type": "uint256",
                                  "internalType": "uint256"
                              }
                          ]
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "renounceOwnership",
                  "inputs": [],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "respondToTask",
                  "inputs": [
                      {
                          "name": "task",
                          "type": "tuple",
                          "internalType": "struct ILotteryServiceManager.Task",
                          "components": [
                              {
                                  "name": "lotteryId",
                                  "type": "uint32",
                                  "internalType": "uint32"
                              },
                              {
                                  "name": "lotteryAddress",
                                  "type": "string",
                                  "internalType": "string"
                              },
                              {
                                  "name": "allowedYieldProtocols",
                                  "type": "string[]",
                                  "internalType": "string[]"
                              },
                              {
                                  "name": "taskCreatedBlock",
                                  "type": "uint32",
                                  "internalType": "uint32"
                              }
                          ]
                      },
                      {
                          "name": "referenceTaskIndex",
                          "type": "uint32",
                          "internalType": "uint32"
                      },
                      {
                          "name": "signature",
                          "type": "bytes",
                          "internalType": "bytes"
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "setPauserRegistry",
                  "inputs": [
                      {
                          "name": "newPauserRegistry",
                          "type": "address",
                          "internalType": "contract IPauserRegistry"
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "stakeRegistry",
                  "inputs": [],
                  "outputs": [
                      {
                          "name": "",
                          "type": "address",
                          "internalType": "address"
                      }
                  ],
                  "stateMutability": "view"
              },
              {
                  "type": "function",
                  "name": "transferOwnership",
                  "inputs": [
                      {
                          "name": "newOwner",
                          "type": "address",
                          "internalType": "address"
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "unpause",
                  "inputs": [
                      {
                          "name": "newPausedStatus",
                          "type": "uint256",
                          "internalType": "uint256"
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "function",
                  "name": "updateAVSMetadataURI",
                  "inputs": [
                      {
                          "name": "_metadataURI",
                          "type": "string",
                          "internalType": "string"
                      }
                  ],
                  "outputs": [],
                  "stateMutability": "nonpayable"
              },
              {
                  "type": "event",
                  "name": "Initialized",
                  "inputs": [
                      {
                          "name": "version",
                          "type": "uint8",
                          "indexed": false,
                          "internalType": "uint8"
                      }
                  ],
                  "anonymous": false
              },
              {
                  "type": "event",
                  "name": "NewTaskCreated",
                  "inputs": [
                      {
                          "name": "taskIndex",
                          "type": "uint32",
                          "indexed": true,
                          "internalType": "uint32"
                      },
                      {
                          "name": "task",
                          "type": "tuple",
                          "indexed": false,
                          "internalType": "struct ILotteryServiceManager.Task",
                          "components": [
                              {
                                  "name": "lotteryId",
                                  "type": "uint32",
                                  "internalType": "uint32"
                              },
                              {
                                  "name": "lotteryAddress",
                                  "type": "string",
                                  "internalType": "string"
                              },
                              {
                                  "name": "allowedYieldProtocols",
                                  "type": "string[]",
                                  "internalType": "string[]"
                              },
                              {
                                  "name": "taskCreatedBlock",
                                  "type": "uint32",
                                  "internalType": "uint32"
                              }
                          ]
                      }
                  ],
                  "anonymous": false
              },
              {
                  "type": "event",
                  "name": "OwnershipTransferred",
                  "inputs": [
                      {
                          "name": "previousOwner",
                          "type": "address",
                          "indexed": true,
                          "internalType": "address"
                      },
                      {
                          "name": "newOwner",
                          "type": "address",
                          "indexed": true,
                          "internalType": "address"
                      }
                  ],
                  "anonymous": false
              },
              {
                  "type": "event",
                  "name": "Paused",
                  "inputs": [
                      {
                          "name": "account",
                          "type": "address",
                          "indexed": true,
                          "internalType": "address"
                      },
                      {
                          "name": "newPausedStatus",
                          "type": "uint256",
                          "indexed": false,
                          "internalType": "uint256"
                      }
                  ],
                  "anonymous": false
              },
              {
                  "type": "event",
                  "name": "PauserRegistrySet",
                  "inputs": [
                      {
                          "name": "pauserRegistry",
                          "type": "address",
                          "indexed": false,
                          "internalType": "contract IPauserRegistry"
                      },
                      {
                          "name": "newPauserRegistry",
                          "type": "address",
                          "indexed": false,
                          "internalType": "contract IPauserRegistry"
                      }
                  ],
                  "anonymous": false
              },
              {
                  "type": "event",
                  "name": "TaskResponded",
                  "inputs": [
                      {
                          "name": "taskIndex",
                          "type": "uint32",
                          "indexed": true,
                          "internalType": "uint32"
                      },
                      {
                          "name": "task",
                          "type": "tuple",
                          "indexed": false,
                          "internalType": "struct ILotteryServiceManager.Task",
                          "components": [
                              {
                                  "name": "lotteryId",
                                  "type": "uint32",
                                  "internalType": "uint32"
                              },
                              {
                                  "name": "lotteryAddress",
                                  "type": "string",
                                  "internalType": "string"
                              },
                              {
                                  "name": "allowedYieldProtocols",
                                  "type": "string[]",
                                  "internalType": "string[]"
                              },
                              {
                                  "name": "taskCreatedBlock",
                                  "type": "uint32",
                                  "internalType": "uint32"
                              }
                          ]
                      },
                      {
                          "name": "operator",
                          "type": "address",
                          "indexed": false,
                          "internalType": "address"
                      }
                  ],
                  "anonymous": false
              },
              {
                  "type": "event",
                  "name": "Unpaused",
                  "inputs": [
                      {
                          "name": "account",
                          "type": "address",
                          "indexed": true,
                          "internalType": "address"
                      },
                      {
                          "name": "newPausedStatus",
                          "type": "uint256",
                          "indexed": false,
                          "internalType": "uint256"
                      }
                  ],
                  "anonymous": false
              }
          ],
      },

    },
  } as const;

export default externalContracts satisfies GenericContractsDeclaration;
