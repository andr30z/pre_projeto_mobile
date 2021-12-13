import React from "react";
import {
  ActivityResultVisualization,
  BackdropLoading,
  Button,
  ConfirmationModal,
} from "../../Components";
import { BaseText } from "../../GlobalStyles/BaseStyles";
import { BaseContainer } from "../../GlobalStyles/Containers.Style";
import ResponsibleChildrenSVG from "../../Illustrations/Fall is coming-cuate.svg";
import { AddChildModal } from "./Modules";
import { useResponsibleChildManagerLogic } from "./useResponsibleChildManagerLogic";
import { AntDesign } from "@expo/vector-icons";
import { Button as UIButton, ButtonSize } from "react-native-ui-lib";
/**
 *
 * @author andr3z0
 **/
const ResponsibleChildManager: React.FC = () => {
  const {
    userResponsibleChildren,
    setIsModalVisibleTrue,
    children,
    isLoadingActivity,
    currentActivityResults,
    isLoading,
    isModalVisible,
    onPressActivityBtn,
    onPressChildCard,
    selectedChild,
    setValue,
    getChildren,
    sheetRef,
    open,
    onDelete,
  } = useResponsibleChildManagerLogic();
  return (
    <>
      <AddChildModal
        isVisible={isModalVisible}
        setIsVisible={setValue}
        onFinishSendingInvite={getChildren}
      />
      <ConfirmationModal
        onConfirm={onDelete}
        modalRef={sheetRef}
        confirmationQuestion="Deseja realmente deixar de ser responsável dessa criança?"
      />
      <BackdropLoading visible={isLoading} />
      {!isLoading && userResponsibleChildren.length === 0 ? (
        <BaseContainer
          flexDirection="column"
          flex={1}
          justify="center"
          align="center"
          paddingHorizontal="5%"
        >
          <ResponsibleChildrenSVG width="100%" height={280} />
          <BaseText
            fontSize="18px"
            marginVertical="25px"
            align="center"
            color="#8078cc"
          >
            Você não possui nenhuma criança vinculada ao seu perfil
          </BaseText>
          <Button
            onPress={setIsModalVisibleTrue}
            buttonTitle="Vincular criança"
            buttonHeight="40px"
            buttonWidth={"80%"}
            backgroundColor="#8078cc"
            hasElevation
          />
        </BaseContainer>
      ) : (
        <ActivityResultVisualization
          membersArray={children}
          isLoadingActivity={isLoadingActivity}
          onPressActivityBtn={onPressActivityBtn}
          onPressChildCard={onPressChildCard}
          selectedChild={selectedChild}
          userActivities={currentActivityResults}
          primaryTheme="#8078cc"
          renderChildHeaderExtraComponent={() => (
            <UIButton
              size={"small" as any}
              label="Desvincular"
              backgroundColor="#ff3232"
              enableShadow
              onPress={open}
              style={{ marginRight: 10 }}
            />
          )}
          isResponsibleVisualization
          childListExtraComponent={
            <AntDesign
              style={{ position: "absolute", top: 0, right: 10, zIndex: 10 }}
              name="pluscircle"
              size={30}
              onPress={setIsModalVisibleTrue}
              color="#8078cc"
            />
          }
        />
      )}
    </>
  );
};

export default ResponsibleChildManager;