class UserSerializer < ActiveModel::Serializer
  attributes :username, :password, :bio, :avatar
end
