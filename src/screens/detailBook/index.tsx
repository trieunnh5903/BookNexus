import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '@/navigators/type';
import { useAppSelector } from '@/hooks';
import { Container } from '@/components';
import { AppText } from '@/components/text';

const DetailBook = ({ route }: RootStackScreenProps<'DetailBook'>) => {
  const { bookId } = route.params;
  const { detailBook } = useAppSelector(state => state.book);
  return (
    <Container>
      <AppText>DetailBook</AppText>
    </Container>
  );
};

export default DetailBook;

const styles = StyleSheet.create({});
