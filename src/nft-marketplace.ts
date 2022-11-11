import { Address, BigInt } from "@graphprotocol/graph-ts"
import { NFTBought as NFTBoughtEvent, NFTCancelled as NFTCancelledEvent, NFTListed as NFTListedEvent } from "../generated/NFTMarketplace/NFTMarketplace"
import { ItemListed, ItemBought, ItemCancelled, ActiveItem } from "../generated/schema"



export function handleNFTListed(event: NFTListedEvent): void {

  let itemListed = ItemListed.load(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))

  let activeItem = ActiveItem.load(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))


  if(!itemListed) {

    itemListed = new ItemListed(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))
  }


  if(!activeItem) {

    activeItem = new ActiveItem(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))
  }


  itemListed.seller = event.params.seller

  itemListed.NFTContractAddress = event.params.NFTContractAddress

  itemListed.tokenId = event.params.tokenId

  itemListed.price = event.params.price


  activeItem.seller = event.params.seller

  activeItem.NFTContractAddress = event.params.NFTContractAddress

  activeItem.tokenId = event.params.tokenId

  activeItem.price = event.params.price


  activeItem.buyer = Address.fromString("0x0000000000000000000000000000000000000000")


  itemListed.save()

  activeItem.save()
}



export function handleNFTBought(event: NFTBoughtEvent): void {

  let itemBought = ItemBought.load(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))

  let activeItem = ActiveItem.load(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))


  if(!itemBought) {

    itemBought = new ItemBought(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))
  }


  itemBought.buyer = event.params.buyer

  itemBought.NFTContractAddress = event.params.NFTContractAddress

  itemBought.tokenId = event.params.tokenId


  activeItem!.buyer = event.params.buyer


  itemBought.save()

  activeItem!.save()
}



export function handleNFTCancelled(event: NFTCancelledEvent): void {

  let itemCancelled = ItemCancelled.load(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))

  let activeItem = ActiveItem.load(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))


  if(!itemCancelled) {

    itemCancelled = new ItemCancelled(getIdFromEventParams(event.params.tokenId, event.params.NFTContractAddress))
  }


  itemCancelled.seller = event.params.seller

  itemCancelled.NFTContractAddress = event.params.NFTContractAddress

  itemCancelled.tokenId = event.params.tokenId


  activeItem!.buyer = Address.fromString("0x000000000000000000000000000000000000dEaD")


  itemCancelled.save()

  activeItem!.save()
}



function getIdFromEventParams(tokenId: BigInt, NFTContractAddress: Address): string {

  return tokenId.toHexString() + NFTContractAddress.toHexString()
}
