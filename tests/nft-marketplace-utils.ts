import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NFTBought,
  NFTCancelled,
  NFTListed
} from "../generated/NFTMarketplace/NFTMarketplace"

export function createNFTBoughtEvent(
  buyer: Address,
  NFTContractAddress: Address,
  tokenId: BigInt,
  price: BigInt
): NFTBought {
  let nftBoughtEvent = changetype<NFTBought>(newMockEvent())

  nftBoughtEvent.parameters = new Array()

  nftBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "NFTContractAddress",
      ethereum.Value.fromAddress(NFTContractAddress)
    )
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftBoughtEvent
}

export function createNFTCancelledEvent(
  seller: Address,
  NFTContractAddress: Address,
  tokenId: BigInt
): NFTCancelled {
  let nftCancelledEvent = changetype<NFTCancelled>(newMockEvent())

  nftCancelledEvent.parameters = new Array()

  nftCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "NFTContractAddress",
      ethereum.Value.fromAddress(NFTContractAddress)
    )
  )
  nftCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftCancelledEvent
}

export function createNFTListedEvent(
  seller: Address,
  NFTContractAddress: Address,
  tokenId: BigInt,
  price: BigInt
): NFTListed {
  let nftListedEvent = changetype<NFTListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "NFTContractAddress",
      ethereum.Value.fromAddress(NFTContractAddress)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nftListedEvent
}
