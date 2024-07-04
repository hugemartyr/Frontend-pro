// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract SkinOwnership {
    address public owner;

    struct SkinOwner {
        string username;
        uint256[] skinIds;
    }

    mapping(string => SkinOwner) public skinOwners;

    constructor() {
        owner = msg.sender;
    }

    function getUser(
        string memory _userName
    ) external view returns (SkinOwner memory) {
        return skinOwners[_userName];
    }

    function createUser(
        string memory _userName
    ) external returns (SkinOwner memory) {
        // Check if user already exists
        require(
            bytes(skinOwners[_userName].username).length == 0,
            "User already exists"
        );

        // If the user does not exist, create a new SkinOwner struct and store it
        uint256[] memory dynamicArray;
        skinOwners[_userName] = SkinOwner({
            username: _userName,
            skinIds: dynamicArray // Empty array of skin IDs
        });
        return skinOwners[_userName];
    }

    function deleteUser(string memory _username) external {
        // Check if the user exists
        require(
            bytes(skinOwners[_username].username).length != 0,
            "User does not exist"
        );

        // If the user exists, delete the user
        delete skinOwners[_username];
    }

    function addSkinToUser(string memory _username, uint256 _skinId) external {
        // Check if the user exists
        require(
            bytes(skinOwners[_username].username).length != 0,
            "User does not exist"
        );

        // Add the skin ID to the user's array of skin IDs
        skinOwners[_username].skinIds.push(_skinId);
    }

    function addMultipleSkinsToUser(
        string memory _username,
        uint256[] memory _skinIds
    ) external {
        // Check if the user exists
        require(
            bytes(skinOwners[_username].username).length != 0,
            "User does not exist"
        );
        // Add the skin IDs to the user's array of skin IDs if they are not already present
        for (uint256 i = 0; i < _skinIds.length; i++) {
            uint256 skinId = _skinIds[i];
            bool alreadyExists = false;
            for (uint256 j = 0; j < skinOwners[_username].skinIds.length; j++) {
                if (skinOwners[_username].skinIds[j] == skinId) {
                    alreadyExists = true;
                    break;
                }
            }
            if (!alreadyExists) {
                skinOwners[_username].skinIds.push(skinId);
            }
        }
    }

    function removeSkinFromUser(
        string memory _username,
        uint256 _skinId
    ) external {
        // Check if the user exists
        require(
            bytes(skinOwners[_username].username).length != 0,
            "User does not exist"
        );

        // Remove the skin ID from the user's array of skin IDs
        uint256[] storage skins = skinOwners[_username].skinIds;
        for (uint256 i = 0; i < skins.length; i++) {
            if (skins[i] == _skinId) {
                skins[i] = skins[skins.length - 1];
                skins.pop();
                break;
            }
        }
    }

    function getUserSkins(
        string memory _username
    ) external view returns (uint256[] memory) {
        // Check if the user exists
        require(
            bytes(skinOwners[_username].username).length > 0,
            "User does not exist"
        );

        // Return the array of skin IDs owned by the user
        return skinOwners[_username].skinIds;
    }
}

// contract address: 0x7161636060D3f7692a3CF2ED395A29d05763b2e4
